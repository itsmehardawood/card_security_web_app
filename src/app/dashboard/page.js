'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import BusinessScreen from '../components/Dashboard-Screens/BusinessScreen';
import BalanceScreen from '../components/Dashboard-Screens/Balancescreen';
import SubscriptionsScreen from '../components/Dashboard-Screens/SubscriptionScreen';
import DocumentsScreen from '../components/Dashboard-Screens/DocumentScreens';
import SupportScreen from '../components/Dashboard-Screens/SupportScreen';
import DevelopersScreen from '../components/Dashboard-Screens/Developer';
import Sidebar from '../components/Dashboard-Screens/Sidebar';
import HomeScreen from '../components/Dashboard-Screens/Homescreen';

function ClientDashboard() {
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
    businessName: '',
    ein: '',
    businessAddress: {
      street: '',
      streetLine2: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'United States'
    },
    sameAsIndividualAddress: false,
    individualAddress: {
      street: '',
      streetLine2: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'United States'
    },
    accountHolderFirstName: '',
    accountHolderLastName: '',
    businessPhone: '',
    businessEmail: '',
    businessDescription: ''
  });
  
  const [documents, setDocuments] = useState([]);
  const [status, setStatus] = useState('incomplete'); // incomplete, pending, approved, active
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleInputChange = (e, section = null) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'sameAsIndividualAddress') {
      setBusinessInfo(prev => ({
        ...prev,
        sameAsIndividualAddress: checked,
        individualAddress: checked ? prev.businessAddress : prev.individualAddress
      }));
      return;
    }

    if (section) {
      setBusinessInfo(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [name]: value
        }
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

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Validation
    const requiredFields = ['businessName', 'ein', 'accountHolderFirstName', 'accountHolderLastName'];
    const missingFields = requiredFields.filter(field => !businessInfo[field]?.trim());
    
    const requiredAddressFields = ['street', 'city', 'state', 'country'];
    const missingAddressFields = requiredAddressFields.filter(field => !businessInfo.businessAddress[field]?.trim());
    
    if (missingFields.length > 0 || missingAddressFields.length > 0) {
      alert('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    if (documents.length === 0) {
      alert('Please upload at least one business document');
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus('pending');
      setActiveTab('profile'); // Stay on profile to show pending status
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
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
                  {businessInfo.accountHolderFirstName ? businessInfo.accountHolderFirstName.charAt(0).toUpperCase() : 'U'}
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

export default ClientDashboard;