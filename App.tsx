import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { CustomerList } from './components/CustomerList';
import { RelationshipReport } from './components/RelationshipReport';
import { CustomersManagement } from './components/CustomersManagement';
import { HandoverView } from './components/HandoverView';
import { SettingsView } from './components/SettingsView';

export default function App() {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [activeMenu, setActiveMenu] = useState('reports');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />
      
      {/* Main Layout */}
      <div className="flex" style={{ height: 'calc(100vh - 64px)' }}>
        {/* Sidebar */}
        <Sidebar activeMenu={activeMenu} onMenuChange={setActiveMenu} />
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-hidden">
          {activeMenu === 'customers' && (
            <div className="h-full p-6">
              <CustomersManagement />
            </div>
          )}
          
          {activeMenu === 'reports' && (
            <div className="h-full flex gap-6 p-6">
              {/* Left Panel - Customer List */}
              <div className="w-[420px] flex-shrink-0">
                <CustomerList 
                  selectedCustomer={selectedCustomer}
                  onSelectCustomer={setSelectedCustomer}
                />
              </div>
              
              {/* Right Panel - Relationship Report */}
              <div className="flex-1 overflow-auto">
                <RelationshipReport customer={selectedCustomer} />
              </div>
            </div>
          )}
          
          {activeMenu === 'handover' && (
            <div className="h-full p-6">
              <HandoverView />
            </div>
          )}
          
          {activeMenu === 'settings' && (
            <div className="h-full p-6">
              <SettingsView />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}