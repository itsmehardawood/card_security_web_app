import React from 'react';

function BalanceScreen() {
  const handleAddFunds = () => {
    // Add funds logic here
    console.log('Add funds clicked');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Account Balance</h2>
      <div className="text-center py-8">
        <div className="text-3xl font-bold text-gray-900 mb-2">$0.00</div>
        <p className="text-gray-600 mb-4">Available Balance</p>
        <button 
          onClick={handleAddFunds}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Add Funds
        </button>
      </div>
      
      {/* Transaction History Section */}
      <div className="mt-8 border-t pt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h3>
        <div className="text-center py-4">
          <p className="text-gray-500">No transactions yet</p>
        </div>
      </div>
    </div>
  );
}

export default BalanceScreen;