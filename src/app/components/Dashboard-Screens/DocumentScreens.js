import React from 'react';

function DocumentsScreen({ documents, setActiveTab, handleFileUpload }) {
  const handleUploadNew = () => {
    // Navigate to business profile component and focus on file upload
    setActiveTab('profile');
    
    // Optional: Scroll to file upload section after navigation
    setTimeout(() => {
      const fileUploadSection = document.querySelector('[data-section="document-upload"]');
      if (fileUploadSection) {
        fileUploadSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const handleCategoryClick = (category) => {
    // Navigate to business profile with category context
    console.log('Navigating to upload for category:', category);
    setActiveTab('profile');
    
    // You could also pass the category to pre-select or highlight it
    setTimeout(() => {
      const fileUploadSection = document.querySelector('[data-section="document-upload"]');
      if (fileUploadSection) {
        fileUploadSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const handleDownload = (docName) => {
    // Download document logic here
    console.log('Download document:', docName);
    // In a real app, this would trigger file download
    alert(`Downloading ${docName}...`);
  };

  const handleDelete = (docName, index) => {
    // Delete document logic here
    if (window.confirm(`Are you sure you want to delete ${docName}?`)) {
      console.log('Delete document:', docName);
      // You could call a delete function passed as prop
      // removeDocument(index);
    }
  };

  const handleDirectUpload = (e) => {
    // Handle direct file upload if handleFileUpload is available
    if (handleFileUpload) {
      handleFileUpload(e);
    } else {
      // Fallback to navigating to business profile
      handleUploadNew();
    }
  };

  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    switch (extension) {
      case 'pdf':
        return '📄';
      case 'jpg':
      case 'jpeg':
      case 'png':
        return '🖼️';
      case 'doc':
      case 'docx':
        return '📝';
      default:
        return '📄';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Documents</h2>
        <div className="flex space-x-2">
          {/* Direct upload option if handleFileUpload is available */}
          {handleFileUpload && (
            <label className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm cursor-pointer">
              Quick Upload
              <input 
                type="file" 
                multiple 
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                onChange={handleDirectUpload}
                className="hidden"
              />
            </label>
          )}
          <button 
            onClick={handleUploadNew}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
          >
            Upload New
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        {documents.length > 0 ? (
          documents.map((doc, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                  <span className="text-blue-600 text-sm">{getFileIcon(doc.name)}</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-700">{doc.name}</span>
                  <p className="text-xs text-gray-500">
                    {(doc.size / 1024 / 1024).toFixed(2)} MB • Uploaded {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => handleDownload(doc.name)}
                  className="px-3 py-1 text-blue-600 hover:text-blue-800 text-sm hover:bg-blue-50 rounded"
                >
                  Download
                </button>
                <button 
                  onClick={() => handleDelete(doc.name, index)}
                  className="px-3 py-1 text-red-600 hover:text-red-800 text-sm hover:bg-red-50 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📁</span>
            </div>
            <p className="text-gray-600 mb-4">No documents uploaded yet</p>
            <p className="text-gray-500 text-sm mb-4">
              Upload your business documents to complete your profile
            </p>
            <div className="flex justify-center space-x-3">
              <button 
                onClick={handleUploadNew}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
              >
                Go to Business Profile
              </button>
              {handleFileUpload && (
                <label className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 text-sm cursor-pointer">
                  Quick Upload Here
                  <input 
                    type="file" 
                    multiple 
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    onChange={handleDirectUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Document Categories */}
      <div className="mt-8 border-t pt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Document Categories</h3>
        <p className="text-gray-600 text-sm mb-4">Click on a category to upload documents for that type</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div 
            onClick={() => handleCategoryClick('business-registration')}
            className="text-center p-3 border rounded-lg hover:bg-blue-50 hover:border-blue-300 cursor-pointer transition-colors"
          >
            <div className="text-2xl mb-2">🏢</div>
            <p className="text-sm text-gray-600">Business Registration</p>
            <p className="text-xs text-gray-500 mt-1">Required</p>
          </div>
          <div 
            onClick={() => handleCategoryClick('identity')}
            className="text-center p-3 border rounded-lg hover:bg-blue-50 hover:border-blue-300 cursor-pointer transition-colors"
          >
            <div className="text-2xl mb-2">🆔</div>
            <p className="text-sm text-gray-600">Identity Documents</p>
            <p className="text-xs text-gray-500 mt-1">Optional</p>
          </div>
          <div 
            onClick={() => handleCategoryClick('financial')}
            className="text-center p-3 border rounded-lg hover:bg-blue-50 hover:border-blue-300 cursor-pointer transition-colors"
          >
            <div className="text-2xl mb-2">💰</div>
            <p className="text-sm text-gray-600">Financial Documents</p>
            <p className="text-xs text-gray-500 mt-1">Optional</p>
          </div>
          <div 
            onClick={() => handleCategoryClick('other')}
            className="text-center p-3 border rounded-lg hover:bg-blue-50 hover:border-blue-300 cursor-pointer transition-colors"
          >
            <div className="text-2xl mb-2">📋</div>
            <p className="text-sm text-gray-600">Other Documents</p>
            <p className="text-xs text-gray-500 mt-1">Optional</p>
          </div>
        </div>
      </div>

      {/* Upload Requirements */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-2">Upload Requirements</h4>
        <ul className="text-blue-700 text-sm space-y-1">
          <li>• Accepted formats: PDF, DOC, DOCX, JPG, PNG</li>
          <li>• Maximum file size: 10MB per file</li>
          <li>• Business registration document is required</li>
          <li>• Ensure documents are clear and readable</li>
        </ul>
      </div>
    </div>
  );
}

export default DocumentsScreen;