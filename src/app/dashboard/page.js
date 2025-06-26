'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState, useEffect, Suspense } from 'react';
import BusinessScreen from '../components/Dashboard-Screens/BusinessScreen';
import BalanceScreen from '../components/Dashboard-Screens/Balancescreen';
import SubscriptionsScreen from '../components/Dashboard-Screens/SubscriptionScreen';
import DocumentsScreen from '../components/Dashboard-Screens/DocumentScreens';
import SupportScreen from '../components/Dashboard-Screens/SupportScreen';
import DevelopersScreen from '../components/Dashboard-Screens/Developer';
import Sidebar from '../components/Dashboard-Screens/Sidebar';
import HomeScreen from '../components/Dashboard-Screens/Homescreen';

// Loading component for Suspense fallback
function DashboardLoader() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading dashboard...</p>
      </div>
    </div>
  );
}

// Separate component that uses useSearchParams
function DashboardContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  
  // Check if user came from OTP verification
  useEffect(() => {
    const verified = searchParams.get('verified');
    if (verified === 'true') {
      console.log('User verified via OTP');
    }
    setIsLoading(false);
  }, [searchParams]);

  const [businessInfo, setBusinessInfo] = useState({
    business_name: '',
    business_registration_number: '',
    street: '',
    street_line2: '',
    city: '',
    state: '',
    zip_code: '',
    country: 'Pakistan',
    account_holder_first_name: '',
    account_holder_last_name: '',
    registration_document: null,
    bank_info: '',
    email: ''
  });
  
  const [documents, setDocuments] = useState([]);
  const [status, setStatus] = useState('incomplete'); // incomplete, pending, approved, active
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // API Integration States
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Sidebar items for header title lookup
  const sidebarItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'profile', label: 'Business Profile', icon: '👤' },
    { id: 'balance', label: 'Balance', icon: '💰' },
    { id: 'subscriptions', label: 'Subscriptions', icon: '📋' },
    { id: 'documents', label: 'Documents', icon: '📄' },
    { id: 'support', label: 'Support', icon: '💬' },
    { id: 'developers', label: 'Developers', icon: '⚡' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    
    if (type === 'file') {
      setBusinessInfo(prev => ({
        ...prev,
        [name]: files[0] || null
      }));
    } else {
      setBusinessInfo(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setDocuments(prev => [...prev, ...files]);
  };

  const removeDocument = (index) => {
    setDocuments(prev => prev.filter((_, i) => i !== index));
  };

  // API INTEGRATION - Modified handleSubmit function
  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);
    
    // Validation
    const requiredFields = ['business_name', 'business_registration_number', 'account_holder_first_name', 'account_holder_last_name', 'street', 'city', 'state', 'country', 'email'];
    const missingFields = requiredFields.filter(field => !businessInfo[field]?.trim());
    
    if (missingFields.length > 0) {
      setSubmitError('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    if (!businessInfo.registration_document) {
      setSubmitError('Please upload a business registration document');
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Prepare FormData for API submission
      const formData = new FormData();
      
      // Add all business information fields individually
      Object.keys(businessInfo).forEach(key => {
        if (key === 'registration_document' && businessInfo[key]) {
          formData.append('registration_document', businessInfo[key]);
        } else if (key !== 'registration_document' && businessInfo[key]) {
          formData.append(key, businessInfo[key]);
        }
      });
      
      // Make API call
      const response = await fetch('https://cardsecuritysystem-8xdez.ondigitalocean.app/api/business-profile', {
        method: 'POST',
        body: formData,
        // Don't set Content-Type header - let browser set it for FormData
      });
      
      // Check if response is successful
      if (response.ok) {
        let result;
        
        try {
          result = await response.json();
        } catch (parseError) {
          // If JSON parsing fails, treat as success if status is ok
          result = { message: 'Business profile submitted successfully' };
        }
        
        // Handle different success response formats
        const isSuccess = result.success === true || 
                         result.success === 'true' ||
                         result.message?.includes('successfully') ||
                         result.status === 'success' ||
                         response.status === 200 || 
                         response.status === 201;
        
        if (isSuccess) {
          setStatus('pending');
          setActiveTab('profile');
          setSubmitSuccess(true);
          
          // Store submission ID for tracking
          if (typeof window !== 'undefined') {
            const submissionId = result.submissionId || result.id || result.data?.id || Date.now().toString();
            localStorage.setItem('businessSubmissionId', submissionId);
          }
          
          console.log('Submission successful:', result);
        } else {
          throw new Error(result.error || result.message || 'Submission failed');
        }
      } else {
        // Handle HTTP error status codes
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || errorData.error || `HTTP error! status: ${response.status}`);
      }
      
    } catch (error) {
      console.error('Submission failed:', error);
      
      // Handle different types of errors
      if (error.message.includes('400')) {
        setSubmitError('Invalid data submitted. Please check your information.');
      } else if (error.message.includes('500')) {
        setSubmitError('Server error. Please try again later.');
      } else if (error.message.includes('Failed to fetch')) {
        setSubmitError('Network error. Please check your connection.');
      } else {
        setSubmitError(error.message || 'An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // API function to check business status
  const checkBusinessStatus = async (submissionId) => {
    try {
      const response = await fetch(`https://cardsecuritysystem-8xdez.ondigitalocean.app/api/business-profile/status/${submissionId}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (result.success) {
        setStatus(result.data.status);
        return result.data;
      }
    } catch (error) {
      console.error('Failed to check business status:', error);
    }
  };

  // Check status on component mount if submission ID exists
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const submissionId = localStorage.getItem('businessSubmissionId');
      if (submissionId) {
        checkBusinessStatus(submissionId);
      }
    }
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomeScreen
            status={status} 
            setActiveTab={setActiveTab} 
          />
        );
        
      case 'profile':
        return (
          <BusinessScreen
            businessInfo={businessInfo}
            documents={documents}
            status={status}
            isSubmitting={isSubmitting}
            submitError={submitError}
            submitSuccess={submitSuccess}
            handleInputChange={handleInputChange}
            handleFileUpload={handleFileUpload}
            removeDocument={removeDocument}
            handleSubmit={handleSubmit}
            router={router}
          />
        );
        
      case 'balance':
        return <BalanceScreen />;
        
      case 'subscriptions':
        return <SubscriptionsScreen />;
        
      case 'documents':
        return (
          <DocumentsScreen 
            documents={documents} 
            setActiveTab={setActiveTab}
            handleFileUpload={handleFileUpload}
          />
        );
        
      case 'support':
        return <SupportScreen />;

      case 'developers':
        return <DevelopersScreen />;
        
      default:
        return null;
    }
  };

  if (isLoading) {
    return <DashboardLoader />;
  }

  return (
    <div className="h-screen bg-gray-50 text-black flex overflow-hidden">
      {/* Fixed Sidebar - No scrolling */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        status={status}
      />

      {/* Main Content Area - Scrollable */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Fixed Header */}
        <header className="flex-shrink-0 bg-white shadow-sm border-b">
          <div className="px-6 py-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                {sidebarItems.find(item => item.id === activeTab)?.label || 'Dashboard'}
              </h2>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  {businessInfo.account_holder_first_name ? businessInfo.account_holder_first_name.charAt(0).toUpperCase() : 'U'}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

// Main component wrapped with Suspense
function ClientDashboard() {
  return (
    <Suspense fallback={<DashboardLoader />}>
      <DashboardContent />
    </Suspense>
  );
}

export default ClientDashboard;