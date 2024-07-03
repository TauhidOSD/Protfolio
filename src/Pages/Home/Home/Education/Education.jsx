

const Education = () => {
 
    const qualifications = [
        {
          degree: 'Bachelor of Science in Computer science and engineering',
          university: 'City University , bangladesh',
          year: '2022 - Running',
          image: 'https://raw.githubusercontent.com/Rezuan-Alam-Rean/Rezuan-Alam-Rean/main/images/programmer.gif', // Placeholder image URL
        },
        {
          degree: 'Higher Secondary Certificate in Science',
          school: 'Narsingdi Public College',
          year: '2019 - 2021',
          image: 'https://media.tenor.com/Q6DFaCAVumYAAAAi/science-penguin.gif', // Placeholder image URL
        },
        // Add more qualifications as needed
      ];
    
      return (
        <div className="flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-white font-semibold mb-6">Education Qualifications</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 w-full">
            {qualifications.map((qualification, index) => (
              <div
                key={index}
                className="bg-slate-800 shadow-md rounded-lg p-6 flex flex-col justify-between sm:flex-row"
              >
                <div className="mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                  <img
                    src={qualification.image}
                    alt="Qualification"
                    className="w-48 h-28 object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg text-white font-semibold mb-2">{qualification.degree}</h3>
                  <p className="text-white mb-2">
                    {qualification.university || qualification.school}
                  </p>
                  <p className="text-white">{qualification.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default Education;
