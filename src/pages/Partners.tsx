import { Paper } from '@mui/material';
import partner1 from '../assets/images/partner1.png';
import partner2 from '../assets/images/partner2.png';
import partner3 from '../assets/images/partner3.png';
import partner4 from '../assets/images/partner4.png';
import partner5 from '../assets/images/partner5.png';
import partner6 from '../assets/images/partner6.png';

const Partners = () => {
  const partners = [
    { name: "Kenya Bureau of Statistics", image: partner1 },
    { name: "Uganda Bureau of Statistics", image: partner2 },
    { name: "Tanzania National Bureau of Statistics", image: partner3 },
    { name: "Rwanda National Institute of Statistics", image: partner4 },
    { name: "African Development Bank", image: partner5 },
    { name: "World Bank", image: partner6 }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Partners</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Working together with leading statistical organizations across East Africa
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <Paper
              key={index}
              elevation={0}
              className="p-6 flex items-center justify-center border border-gray-100 hover:border-[#dd8604] transition-colors duration-300"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </Paper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners; 