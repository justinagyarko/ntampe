import React from 'react';
import { 
  User, 
  Settings, 
  HelpCircle, 
  Search, 
  FileText, 
  Calculator, 
  Monitor, 
  Power,
  Folder,
  Clock
} from 'lucide-react';

interface StartMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const StartMenu: React.FC<StartMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const menuItems = [
    { icon: User, label: 'Programs', hasSubmenu: true },
    { icon: FileText, label: 'Documents', hasSubmenu: true },
    { icon: Settings, label: 'Settings', hasSubmenu: true },
    { icon: Search, label: 'Find', hasSubmenu: true },
    { icon: HelpCircle, label: 'Help' },
    { icon: Monitor, label: 'Run...' },
    { separator: true },
    { icon: Power, label: 'Shut Down...' }
  ];

  const programItems = [
    { icon: Calculator, label: 'Calculator' },
    { icon: FileText, label: 'Notepad' },
    { icon: Monitor, label: 'Paint' },
    { icon: Folder, label: 'Windows Explorer' },
    { icon: Clock, label: 'Clock' }
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40" 
        onClick={onClose}
      />
      
      {/* Start Menu */}
      <div className="fixed bottom-7 left-2 z-50 w-64">
        <div className="win95-window">
          <div className="win95-titlebar text-center">
            <span>Windows 95</span>
          </div>
          
          <div className="flex">
            {/* Left sidebar */}
            <div className="w-6 bg-gradient-to-b from-blue-600 to-blue-800 flex flex-col items-center justify-center text-white text-xs font-bold writing-mode-vertical">
              <span className="transform -rotate-90 whitespace-nowrap">Windows 95</span>
            </div>
            
            {/* Menu items */}
            <div className="flex-1 p-1">
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.separator ? (
                    <div className="border-t border-gray-600 my-1" />
                  ) : (
                    <div className="group relative">
                      <button className="w-full flex items-center space-x-2 px-2 py-1 text-left hover:bg-blue-600 hover:text-white text-xs">
                        {item.icon && <item.icon size={14} />}
                        <span className="flex-1">{item.label}</span>
                        {item.hasSubmenu && (
                          <span className="text-xs">▶</span>
                        )}
                      </button>
                      
                      {/* Submenu for Programs */}
                      {item.label === 'Programs' && (
                        <div className="absolute left-full top-0 ml-1 w-48 win95-window opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                          <div className="win95-titlebar">
                            <span>Programs</span>
                          </div>
                          <div className="p-1">
                            {programItems.map((program, idx) => (
                              <button 
                                key={idx}
                                className="w-full flex items-center space-x-2 px-2 py-1 text-left hover:bg-blue-600 hover:text-white text-xs"
                                onClick={() => {
                                  alert(`Opening ${program.label}...`);
                                  onClose();
                                }}
                              >
                                <program.icon size={14} />
                                <span>{program.label}</span>
                              </button>
                            ))}
                            <div className="border-t border-gray-600 my-1" />
                            <button className="w-full flex items-center space-x-2 px-2 py-1 text-left hover:bg-blue-600 hover:text-white text-xs">
                              <Folder size={14} />
                              <span>Accessories</span>
                              <span className="ml-auto">▶</span>
                            </button>
                          </div>
                        </div>
                      )}
                      
                      {/* Submenu for Documents */}
                      {item.label === 'Documents' && (
                        <div className="absolute left-full top-0 ml-1 w-48 win95-window opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                          <div className="win95-titlebar">
                            <span>Documents</span>
                          </div>
                          <div className="p-1">
                            <button className="w-full flex items-center space-x-2 px-2 py-1 text-left hover:bg-blue-600 hover:text-white text-xs">
                              <FileText size={14} />
                              <span>My Documents</span>
                            </button>
                            <button className="w-full flex items-center space-x-2 px-2 py-1 text-left hover:bg-blue-600 hover:text-white text-xs">
                              <FileText size={14} />
                              <span>Recent Documents</span>
                            </button>
                          </div>
                        </div>
                      )}
                      
                      {/* Submenu for Settings */}
                      {item.label === 'Settings' && (
                        <div className="absolute left-full top-0 ml-1 w-48 win95-window opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                          <div className="win95-titlebar">
                            <span>Settings</span>
                          </div>
                          <div className="p-1">
                            <button className="w-full flex items-center space-x-2 px-2 py-1 text-left hover:bg-blue-600 hover:text-white text-xs">
                              <Settings size={14} />
                              <span>Control Panel</span>
                            </button>
                            <button className="w-full flex items-center space-x-2 px-2 py-1 text-left hover:bg-blue-600 hover:text-white text-xs">
                              <Monitor size={14} />
                              <span>Printers</span>
                            </button>
                            <button className="w-full flex items-center space-x-2 px-2 py-1 text-left hover:bg-blue-600 hover:text-white text-xs">
                              <Settings size={14} />
                              <span>Taskbar</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartMenu;