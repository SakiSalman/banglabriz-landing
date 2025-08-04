import React from 'react';

const StatisticsSection = () => {
  const stats = [
    { number: '10', label: 'Successful Course Graduates', suffix: '+' },
    { number: '700', label: 'Project Completed', suffix: '+' },
    { number: '5k', label: 'Global Happy Clients', suffix: '+' },
    { number: '500', label: 'Team Members', suffix: '+' },
  ];

  return (
    <section className="bg-gray-light py-16">
      <div className="_container">
        <div className="text-center mb-5">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Study. Travel. Live</h2>
          <p className="text-base text-text">
            BanglaBriz Career Development Centre & Education Consultancy
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">
                {stat.number}
                <span className="text-secondary">{stat.suffix}</span>
              </div>
              <div className="text-sm md:text-base text-text">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
