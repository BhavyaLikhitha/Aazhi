import React from 'react';
import './providers.css';
import placeholder from './women.png'; // Replace with actual image

export default function Providers() {
  const providers = [
    {
      name: 'Someshwari S',
      qualification: 'M.A. Psychology, PGDCP',
      focus: 'Self development, Discrimination, identity, Relationship',
      image: placeholder
    },
    {
      name: 'Udaya Priyanka P',
      qualification: 'MSW - Family and Child Welfare, PGDCP',
      focus: 'Children, family, parenting.',
      image: placeholder
    }
  ];

  return (
    <div className="providers-section">
      <h2 className="providers-title">Your providers</h2>

      <div className="providers-grid">
        {providers.map((provider, index) => (
          <div key={index} className="provider-card">
            <img src={provider.image} alt={provider.name} className="provider-image" />
            <h3 className="provider-name">{provider.name}</h3>
            <p className="provider-qual">{provider.qualification}</p>
            <p className="provider-focus">
              <strong>Area of focus:</strong> {provider.focus}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
