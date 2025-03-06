import { Card, CardContent, Button } from '@mui/material';
import { AcademicCapIcon, UserIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline';

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Fabian Nabugoomu",
      title: "Chairman, Board of Directors",
      image: "/team/fabian-nabugoomu.jpg",
      shortBio: "Associate Professor of Statistics and Applied Computing. Currently the Deputy Vice-Chancellor of Kyambogo University responsible for Finance and Administration.",
      education: "PhD in Statistics (1994) from the University of Edinburgh, Scotland",
      icon: <AcademicCapIcon className="h-6 w-6 text-[#dd8604]" />
    },
    {
      name: "Prof. Ronald Wesonga",
      title: "Founding Director",
      image: "/team/ronald-wesonga.jpg",
      shortBio: "Statistician based at the Department of Statistics, Sultan Qaboos University. Formerly a visiting Professor at the Institute of Social Research, Makerere University.",
      education: "Studied at the Institute of Statistics and Applied Economics, Makerere University",
      icon: <UserIcon className="h-6 w-6 text-[#dd8604]" />
    },
    {
      name: "Dr. Abraham Owino Yeyo",
      title: "Director",
      image: "/team/abraham-yeyo.jpg",
      shortBio: "Statistician involved in capacity building in Research, Monitoring and Evaluation and Community Development, currently lecturing at Makerere University.",
      education: "Lecturer at Makerere University School of Statistics and Planning",
      icon: <BuildingLibraryIcon className="h-6 w-6 text-[#dd8604]" />
    }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Team Header */}
      <div className="container mx-auto px-4 mb-16">
        <h1 className="text-4xl font-bold text-center mb-6">Our Team</h1>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-8">
            EASI is a young organization that has just been formed. Its experience in research and consultancies 
            are the combined experiences of its Directors and Partners which are briefly outlined below.
          </p>
        </div>
      </div>

      {/* Team Members */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="relative h-64 bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/team/placeholder.jpg";
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                    {member.icon}
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[#dd8604] font-medium mb-4">{member.title}</p>
                  <p className="text-gray-600 mb-4">{member.shortBio}</p>
                  <div className="flex items-center mb-4">
                    <AcademicCapIcon className="h-5 w-5 text-gray-500 mr-2" />
                    <p className="text-sm text-gray-500">{member.education}</p>
                  </div>
                  <Button 
                    variant="outlined" 
                    className="mt-2 border-[#dd8604] text-[#dd8604] hover:bg-[#dd8604] hover:text-white"
                  >
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Organization Description */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Expertise</h2>
            <p className="text-gray-600 mb-6">
              Our team brings together decades of combined experience in statistical research, 
              methodology development, and practical applications. With backgrounds spanning 
              academia, government, and international organizations, our directors provide 
              EASI with a wealth of knowledge and expertise.
            </p>
            <p className="text-gray-600 mb-6">
              Each team member contributes unique skills in areas such as computational statistics, 
              survey design, data mining, and statistical modeling. This diverse expertise allows 
              EASI to offer comprehensive solutions to complex statistical challenges across East Africa.
            </p>
            <p className="text-gray-600">
              Together, we are committed to advancing statistical excellence, building capacity, 
              and supporting evidence-based decision making throughout the region.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Work With Our Expert Team</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Interested in collaborating with our team of statistical experts? 
          Contact us today to discuss how we can support your research or training needs.
        </p>
        <Button
          variant="contained"
          size="large"
          className="bg-[#dd8604] hover:bg-[#c77804] text-white px-8"
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Team; 