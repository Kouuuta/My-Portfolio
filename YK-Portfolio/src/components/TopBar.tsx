const TopBar = () => {
  const projects = [
    {
      title: "I love to play online games",
      client: "TFT, Valorant, Mobile Legends",
    },
    {
      title: "I am a ",
      client: "Gymrat, Guitarist",
    },
    {
      title: "Studying at University of Santo Tomas",
      client: "UST",
    },
    {
      title: "Taking Computer Science specailized in Data Science",
      client: "BSCS",
    },
    { title: "I was born in Japan", client: "Birth" },
    { title: "Performance campaigns for lead generation", client: "FiscFree" },
    {
      title: "Development of digital landscape",
      client: "Damen Technical Agencies",
    },
    { title: "Multi-channel recruitment campaign", client: "Surplus" },
    {
      title: "Development of corporate and recruitment platform",
      client: "Maas-Jacobs",
    },
    { title: "Corporate website", client: "Oliehoorn" },
    {
      title: "Employer branding and recruitment campaign",
      client: "Hoogheemraadschap Delfland",
    },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-[#4ecca3] text-black py-2 overflow-hidden z-40 font-medium text-sm">
        <div className="flex items-center">
          <span className="px-4 whitespace-nowrap font-semibold">
            Web Developer
          </span>

          {/* Scrolling content */}
          <div className="flex-1 overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of items */}
              <div className="flex whitespace-nowrap">
                {projects.map((project, index) => (
                  <div key={index} className="flex items-center mx-8">
                    <span className="mr-2">{project.title}</span>
                    <span className="text-gray-700 font-semibold">
                      - {project.client}
                    </span>
                  </div>
                ))}
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex whitespace-nowrap">
                {projects.map((project, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="flex items-center mx-8"
                  >
                    <span className="mr-2">{project.title}</span>
                    <span className="text-gray-700 font-semibold">
                      - {project.client}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
