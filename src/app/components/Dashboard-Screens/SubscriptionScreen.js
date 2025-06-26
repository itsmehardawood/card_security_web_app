import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

function SubscriptionsScreen() {
  const router = useRouter();
  const handleBrowsePlans = () => {
    router.push("/plans")
    console.log('Browse plans clicked');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Subscriptions</h2>
      <div className="text-center py-8">
        <p className="text-gray-600 mb-4">No active subscriptions</p>
        <button 
          onClick={handleBrowsePlans}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Browse Plans
        </button>
      </div>
      
      {/* Available Plans Section */}
      <div className="mt-8 border-t pt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Plans</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold mb-2">Standard Plan</h4>
            <p className="text-gray-600 text-sm mb-3">Perfect for small businesses</p>
            <div className="text-xl font-bold mb-3">$29/month</div>
            <Link href="/plans" className="w-full block text-center px-3 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 text-sm">
             Go to payments
            </Link>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold mb-2">Premium Plan</h4>
            <p className="text-gray-600 text-sm mb-3">For growing businesses</p>
            <div className="text-xl font-bold mb-3">$79/month</div>
            <Link href="/plans" className="w-full block text-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
              Select Plan
            </Link>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold mb-2">Custom Plan</h4>
            <p className="text-gray-600 text-sm mb-3">For large organizations</p>
            <div className=" text-xl font-bold mb-3">Custom</div>
            <Link href="/plans" className="w-full px-3 py-2 border block text-center border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 text-sm">
             Go to payments
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionsScreen;