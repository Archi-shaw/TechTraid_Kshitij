export default function Home() {
    return (
      <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#BEE4F3', padding: '20px', minHeight: '100vh' }}>
        {/* Latest Reviews */}
        <section
          style={{
            backgroundColor: '#ffff',
            boxShadow: "base",
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 style={{ marginBottom: '10px' }}>Latest Reviews</h2>
          <p style={{ marginBottom: '10px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam.
          </p>
          <p style={{ fontStyle: 'italic', fontWeight: 'bold', textAlign: 'right' }}>-- xyz</p>
        </section>
  
        {/* Latest Activity */}
        <section
          style={{
            backgroundColor: '#82B7CD',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 style={{ marginBottom: '10px' }}>Latest Activity</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
            <thead>
              <tr>
                <th style={{ borderBottom: '2px solid #ccc', padding: '8px', textAlign: 'left' }}>Action</th>
                <th style={{ borderBottom: '2px solid #ccc', padding: '8px', textAlign: 'left' }}>RFQ</th>
                <th style={{ borderBottom: '2px solid #ccc', padding: '8px', textAlign: 'left' }}>User</th>
                <th style={{ borderBottom: '2px solid #ccc', padding: '8px', textAlign: 'left' }}>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px' }}>Created RFQ</td>
                <td style={{ padding: '8px' }}>Office Supplies 2023</td>
                <td style={{ padding: '8px' }}>user1</td>
                <td style={{ padding: '8px' }}>12.02.2023</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Submitted response</td>
                <td style={{ padding: '8px' }}>IT Services Contract</td>
                <td style={{ padding: '8px' }}>user2</td>
                <td style={{ padding: '8px' }}>12.02.2023</td>
              </tr>
            </tbody>
          </table>
        </section>
  
        {/* Quick Actions */}
        <section
          style={{
            backgroundColor: '#82B7CD',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 style={{ marginBottom: '10px' }}>Quick Actions</h2>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: '#ffe599',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Create New RFQ
            </button>
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: '#ffe599',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Search for Vendors
            </button>
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: '#ffe599',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              RFQ Management
            </button>
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: '#ffe599',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Magic Search
            </button>
          </div>
        </section>
      </div>
    );
  }
  