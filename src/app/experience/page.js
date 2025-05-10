import { Timeline } from "@/components/ui/timeline";

export default function ExperiencePage() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-600 md:text-sm">
            Kickstarted my career switch by gaining experience in Scrum
            management, assisting the team with monthly purchase orders for
            required IT department software, and participating in internship
            career projects.
          </p>
          <div className="grid gap-4">
            <h2 className="text-lg">
              Software Intern{" "}
              <span className="text-blue-400">@ Yoma Fleet Limited</span>
            </h2>
            <ul className="list-disc space-y-4 text-sm">
              <li>
                Developed a job application platform as part of an R&D intern
                project, designing responsive UI components using React.js and
                TypeScript to enhance user experience. Reported to Senior
                Developers for guidance and feedback.
              </li>
              <li>
                Ensured software quality by writing test cases and conducting
                manual testing, identifying and resolving critical bugs.
                Coordinated with the Senior QA team and developers via ticketing
                system (ClickUp).
              </li>
              <li>
                Collaborated on Business Requirement Documentation (BRD) for the
                intern project job application and R&D efforts, ensuring
                technical solutions aligned with business objectives. Reported
                to the Project Manager.
              </li>
              <li>
                Adopted Agile methodologies (SCRUM) and utilized Git, GitHub,
                and ClickUp for version control, task management, and team
                collaboration
              </li>
              <li>
                Streamlined IT operations by assisting with purchase orders
                (Odoo) and managing monthly payments for software tools and
                services. Reported to the IT Head.
              </li>
              <li>
                Participated in planning meetings for upcoming projects and
                documented meeting notes on business requirements. Reported to
                the Project Manager
              </li>
              <li>
                Managed tasks, time tracking, and sprints using ClickUp,
                reported to the Project Manager.
              </li>
            </ul>
          </div>
          <hr className="mt-5" />
          <div className="grid gap-4 mt-5">
            <h2 className="text-lg">
              Junior Web Developer{" "}
              <span className="text-blue-400">@ Village Link Co. Ltd</span>
            </h2>
            <ul className="list-disc space-y-4 text-sm">
              <li>
                Debugged and optimized a social media design website, resolving
                front-end issues using Next.js and enhancing CMS functionality
                with React.js to improve performance and user experience.
              </li>
              <li>
                Developed and implemented new features for end-users using
                Next.js, contributing to a more dynamic and interactive website.
              </li>
              <li>
                Collaborated with the project manager to create user guidelines
                and documentation, ensuring smooth onboarding and system
                understanding.
              </li>
              <li>
                Strengthened software reliability by writing and executing test
                cases for ongoing projects, identifying critical bugs before
                deployment.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-600 md:text-sm">
            Before transitioning to tech, I worked in operations where I built
            strong skills in coordination, problem-solving, and teamwork.
          </p>

          <div>
            <h2 className="text-lg">
              Operations Coordinator{" "}
              <span className="text-blue-400 mr-2">
                @ AGB Communication Co. Ltd
              </span>
              (2018)
            </h2>
            <p className="text-sm mt-4">
              Served as a Project Coordinator, managing various products and
              services while gaining extensive knowledge about networking
              devices. Responsibilities included collecting data as a third
              party, arranging installations, calculating installation
              positions, visiting sites, and collaborating with Ooredoo as a
              partner for various reporting tasks.
            </p>
          </div>
          <hr className="mt-4 mb-4" />
          <div>
            <h2 className="text-lg">
              Project Coordinator{" "}
              <span className="text-blue-400 mr-2">
                @ Kinetic Mynamar Enterprise
              </span>
              (2018 ~ 2019)
            </h2>
            <p className="text-sm mt-4">
              Served as a Project Coordinator, managing various products and
              services while gaining extensive knowledge about networking
              devices. Responsibilities included collecting data as a third
              party, arranging installations, calculating installation
              positions, visiting sites, and collaborating with Ooredoo as a
              partner for various reporting tasks.
            </p>
          </div>
          <hr className="mt-4 mb-4" />
          <div>
            <h2 className="text-lg">
              Production Control & Sales Executive (New Model Project){" "}
              <span className="text-blue-400 mr-2">
                 @ Foster Electric Thilawa Co. ltd
              </span>
              (2019 ~ 2020)
            </h2>
            <p className="text-sm mt-4">
              Responsible for overseeing new model production, planning, and
              managing the entire process from headquarters to shipping. Gained
              valuable experience collaborating with foreign partners
            </p>
          </div>
          <hr className="mt-4 mb-4" />
          <div>
            <h2 className="text-lg">
              Project Coordinator{" "}
              <span className="text-blue-400 mr-2">
                @ Kinetic Mynamar Enterprise
              </span>
              (2020 ~ 2023)
            </h2>
            <p className="text-sm mt-4">
              Responsible for managing the tax process and insurance for newly
              purchased vehicles, ensuring timely handover to customers, and
              accurately inputting and updating data into the ERP system (Odoo).
              Responsible for following up with customers to ensure the timely
              renewal of yearly insurance and licenses for leased vehicles.
              Responsible for coordinating with the IoT team for the
              installation of GPS systems in newly purchased vehicles.
              Responsible for tracking and reporting weekly GPS data, monitoring
              the vehicle's usage status, including checking if the GPS system
              was functioning properly (green light) and whether the vehicle was
              in use. Followed up with customers based on the weekly GPS report
              to address any issues or ensure compliance with vehicle usage
              guidelines.
            </p>
          </div>
        </div>
      ),
    }
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <h1 className="text-2xl md:text-3xl text-white font-bold max-w-5xl mx-auto mt-20 md:mt-40 mb-5">
        Work Experience
      </h1>
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </div>
  );
}
