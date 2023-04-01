import React from 'react'

export default function Scrollablelist() {
    const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10", "Item 11", "Item 12", "Item 13", "Item 14", "Item 15", "Item 16", "Item 17", "Item 18", "Item 19", "Item 20"];

    return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'calc(100vh - 40px)',
        gridGap: '20px',
      }}>
        <div style={{
          gridColumn: '1 / 2',
          gridRow: '1 / 2',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
          }}>
            <input type="text" placeholder="Search..." style={{
              width: 'calc(100% - 80px)',
              height: '40px',
              padding: '10px',
              border: 'none',
              outline: 'none',
              fontSize: '16px',
              borderRadius: '5px',
              marginRight: '10px',
            }} />
            <button style={{
              width: '80px',
              height: '40px',
              backgroundColor: '#4CAF50',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
            }}>Search</button>
          </div>
          <div style={{
            height: 'calc(100% - 90px)',
            overflowY: 'scroll',
            scrollbarWidth: 'thin',
            scrollbarColor: '#4CAF50 #fff',
          }}>
            {items.map((item, index) => (
              <div key={index} style={{
                backgroundColor: '#f2f2f2',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '5px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}>{item}</div>
            ))}
          </div>
          <button style={{
            width: '100%',
            height: '50px',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}>Button</button>
        </div>
        {/* <div style={{
          gridColumn: '2 / 3',
          gridRow: '1 / 2',
          background: 'url("https://picsum.photos/600/600") center center no-repeat',
          backgroundSize: 'cover',
          borderRadius: '10px',
        }}></div> */}
      </div>
    );
}
