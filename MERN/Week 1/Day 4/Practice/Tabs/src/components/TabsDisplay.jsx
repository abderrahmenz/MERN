import React, { useState } from 'react';

function TabsDisplay() {
    const [activeTab, setActiveTab] = useState('Tab 1');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div>
            <button onClick={() => handleTabClick('Tab 1')}>Tab 1</button>
            <button onClick={() => handleTabClick('Tab 2')}>Tab 2</button>
            <button onClick={() => handleTabClick('Tab 3')}>Tab 3</button>
            <fieldset>
                <p>{activeTab} content is showing here</p>
            </fieldset>
        </div>
    );
}

export default TabsDisplay;
