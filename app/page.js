import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <header className="w-full px-[40px] py-[20px] border-b-[1px] fixed top-0 left-0 bg-white z-50">
        <div className="flex items-center justify-between ">
          <h3 className="font-open text-[24px] text-[#00B4D8] font-semibold text-left">
            {"<dE/>"}
          </h3>
          <nav>
            <a
              href="#home"
              className="mr-[40px] text-[16px] hover:text-[#00B4D8] hidden tt:inline-block"
            >
              Home
            </a>
            <a
              href="#about"
              className="mr-[40px] text-[16px] hover:text-[#00B4D8] hidden tt:inline-block"
            >
              About
            </a>
            <a
              href="#projects"
              className="mr-[40px] text-[16px] hover:text-[#00B4D8] hidden tt:inline-block"
            >
              Projects
            </a>
            <button
              href="#contact"
              className="bg-black hover:bg-[#00B4D8] text-white font-medium py-[10px] px-[20px] rounded-full font-sans text-[18px] tracking-[1px]"
            >
              <a href="#contact">Contact</a>
            </button>
          </nav>
        </div>
      </header>

      <section
        className="bg-imagephone tt:bg-imagesquare bg-bottom lt:bg-image bg-contain w-dvw h-dvh bg-no-repeat bg-position-bottom flex justify-center items-center overflow-y-hidden"
        id="home"
      >
        <div className="relative w-10/12 tt:w-3/4 lt:w-2/5 flex justify-center items-center flex-col">
          <div className="w-full">
            <h3 className="font-open text-[24px] text-[#00B4D8] font-semibold text-center">
              dev Edward T
            </h3>
          </div>
          <div className="w-full">
            <h1 className="font-open text-[40px] lt:text-[48px] dt:text-[64px] font-bold tracking-wide text-center">
              Frontend Developer & UI UX Designer
            </h1>
          </div>
          <button
            href="#"
            className="bg-black hover:bg-[#00B4D8] text-white font-medium py-[10px] px-[20px] rounded-full font-sans text-[18px] tracking-[1px] mt-[40px]"
          >
            <a href="#projects">Projects →</a>
          </button>
        </div>
      </section>

      <section
        className="py-[120px] justify-center items-center bg-black relative overflow-y-hidden overflow-x-hidden"
        id="about"
      >
        <div className="flex justify-center items-center flex-col">
          <h3 className="font-open text-[28px] text-white font-bold text-center">
            About me
          </h3>
          <Image
            className="mt-[16px]"
            src="/Vector.svg"
            alt="Vector"
            width={42}
            height={10}
            priority
          />
          <div className="flex justify-center items-center mt-[64px]">
            <div className="flex justify-center items-center flex-col">
              <div className="flex flex-col tt:flex-row justify-center items-center">
                <div className="w-[300px] bg-white p-[20px] rounded-[16px] mb-[20px] tt:mb-[0px] tt:mr-[20px] z-20">
                  <Image
                    className="mb-[24px]"
                    src="/WD.svg"
                    alt="WD"
                    width={50}
                    height={50}
                    priority
                  />
                  <h4 className="font-open text-[18px] text-black font-semibold mb-[12px]">
                    Web Development
                  </h4>
                  <p className="text-[#495057] tracking-[0.5px] leading-[26px]">
                    💻 I'm a web developer specializing in HTML, CSS,
                    JavaScript, React, and Next.js, along with a bunch of other
                    tools such as Firebase, Node.Js, PostgreSQL, Tailwind CSS,
                    Chakra UI, Sass, Bootstrap, React Hook Form, Redux, Regex
                    and other popular libraries and technologies.
                  </p>
                </div>
                <div className="flex justify-center items-center flex-col">
                  <div className="w-[300px] bg-white p-[20px] rounded-[16px] mb-[20px] z-20">
                    <Image
                      className="mb-[24px]"
                      src="/UI.svg"
                      alt="UI"
                      width={50}
                      height={50}
                      priority
                    />
                    <h4 className="font-open text-[18px] text-black font-semibold mb-[12px]">
                      UI/UX Design
                    </h4>
                    <p className="tracking-[0.5px] leading-[26px]">
                      🎨 In addition to my technical skills, I'm also passionate
                      about UI/UX design.
                    </p>
                  </div>
                  <div className="w-[300px] bg-white p-[20px] rounded-[16px] z-20">
                    <Image
                      className="mb-[24px]"
                      src="/MP.svg"
                      alt="MP"
                      width={50}
                      height={50}
                      priority
                    />
                    <h4 className="font-open text-[18px] text-black font-semibold mb-[12px]">
                      Music Production
                    </h4>
                    <p className="dt:text-[#495057] tracking-[0.5px] leading-[26px]">
                      🎹 Outside of the digital realm, I enjoy exploring the
                      world of music production.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-[#ffffff] dt:text-[#ADB5BD] text-center tracking-[0.5px] text-[24px] mt-[80px] z-20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-[8px] rounded-full">
            ✨ Let's collaborate and bring your vision to life.
          </h3>
          <h4 className="text-[#ffffff] dt:text-[#ADB5BD] text-center tracking-[0.5px] text-[16px] mt-[8px] z-20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-[8px] rounded-full">
            Together, we can create something extraordinary!
          </h4>
          <button
            href="#"
            className="bg-white text-black hover:bg-[#00B4D8] hover:text-[white] font-medium py-[10px] px-[20px] rounded-full font-sans text-[18px] tracking-[1px] mt-[40px] z-20"
          >
            <a href="#contact">Contact me →</a>
          </button>
        </div>
        <div className="w-[800px] h-[600px] rounded-[16px] absolute rotate-12 top-64 -left-80 z-[1] bg-gradient-to-r from-[#00B4D8] to-[#4DB6AC]"></div>
        <div className="w-[800px] h-[600px] rounded-[16px] absolute rotate-12 top-64 -right-80 z-[1]  bg-gradient-to-r from-[#F72B1E] to-[#D27E00] hidden lt:inline-block"></div>
      </section>

      <section
        className="py-[120px] justify-center items-center bg-white relative overflow-y-hidden overflow-x-hidden"
        id="projects"
      >
        <div className="flex justify-center items-center flex-col">
          <h3 className="font-open text-[28px] text-black font-bold text-center">
            My projects
          </h3>

          <Image
            className="mt-[16px]"
            src="/Vector.svg"
            alt="Vector"
            width={42}
            height={10}
            priority
          />
          <div className="flex flex-col dt:flex-row mt-[120px] items-center">
            <div className="mb-[40px] flex flex-col items-center dt:items-start">
              <div className="flex flex-col text-left ">
                <h3 className="font-open text-[28px] text-black font-regular text-center dt:text-left mb-[8px]">
                  Artisan
                </h3>
                <h4 className="font-open text-[18px] text-[#00B4D8] font-regular text-center dt:text-left">
                  Invoice & Stock Management
                </h4>
              </div>

              <div className="flex justify-evenly mt-[40px] flex-col tt:flex-row">
                <div className="flex flex-col tt:mr-[64px]">
                  <div className="flex items-center mb-[24px]">
                    <Image
                      className="mr-[16px]"
                      src="/React.png"
                      alt="React"
                      width={50}
                      height={50}
                      priority
                    />
                    <p className="text-black tracking-[0.5px] leading-[26px]">
                      React
                    </p>
                  </div>
                  <div className="flex items-center mb-[24px]">
                    <Image
                      className="mr-[16px]"
                      src="/Hook Form.png"
                      alt="React Hook Form"
                      width={50}
                      height={50}
                      priority
                    />
                    <p className="text-black tracking-[0.5px] leading-[26px]">
                      React Hook Form
                    </p>
                  </div>
                  <div className="flex items-center mb-[24px]">
                    <Image
                      className="mr-[16px]"
                      src="/Router Dom.png"
                      alt="React Router Dom"
                      width={50}
                      height={50}
                      priority
                    />
                    <p className="text-black tracking-[0.5px] leading-[26px]">
                      React Router Dom
                    </p>
                  </div>
                  <div className="flex items-center mb-[24px]">
                    <Image
                      className="mr-[16px]"
                      src="/Yup.png"
                      alt="Yup"
                      width={50}
                      height={50}
                      priority
                    />
                    <p className="text-black tracking-[0.5px] leading-[26px]">
                      Yup Validation
                    </p>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <div className="flex items-center mb-[24px]">
                    <Image
                      className="mr-[16px]"
                      src="/Javascript.png"
                      alt="Javascript"
                      width={50}
                      height={50}
                      priority
                    />
                    <p className="text-black tracking-[0.5px] leading-[26px]">
                      Javascript
                    </p>
                  </div>
                  <div className="flex items-center mb-[24px]">
                    <Image
                      className="mr-[16px]"
                      src="/Firebase.png"
                      alt="Firebase"
                      width={50}
                      height={50}
                      priority
                    />
                    <p className="text-black tracking-[0.5px] leading-[26px]">
                      Firebase
                    </p>
                  </div>
                  <div className="flex items-center mb-[24px]">
                    <Image
                      className="mr-[16px]"
                      src="/Chakra UI.png"
                      alt="Chakra UI"
                      width={50}
                      height={50}
                      priority
                    />
                    <p className="text-black tracking-[0.5px] leading-[26px]">
                      Chakra UI
                    </p>
                  </div>
                </div>
              </div>
              <button
                href="#"
                className=" hover:text-[#00B4D8] text-[#495057] underline underline-offset-4 font-medium font-sans text-[18px] tracking-[1px] mt-[40px] "
              >
                {" "}
                <a
                  href="https://artisan-staging-4b2c0.web.app/setup"
                  target="_blank"
                >
                  View website →
                </a>
              </button>
            </div>
            <div className="bg-artisan bg-cover w-[300px] h-[200px] tt:w-[450px] tt:h-[250px] lt:w-[550px] lt:h-[350px] dt:w-[650px] dt:h-[450px] rounded-[10px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] dt:ml-[64px]"></div>
          </div>

          <Image
            className="mt-[120px]"
            src="/Vector.svg"
            alt="Vector"
            width={42}
            height={10}
            priority
          />

          <div className="flex flex-col dt:flex-row mt-[120px] items-center">
            <div className="order-last dt:order-first bg-smartbrain bg-cover bg-center w-[300px] h-[200px] tt:w-[450px] tt:h-[250px] lt:w-[550px] lt:h-[350px] dt:w-[650px] dt:h-[450px] rounded-[10px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] dt:mr-[64px] mt-[40px] dt:mt-[0px]"></div>
            <div className="dt:mt-[40px] flex flex-col items-center dt:items-start">
              <div className="flex flex-col text-left">
                <h3 className="font-open text-[28px] text-black font-regular mb-[8px] text-center dt:text-left">
                  Smartbrain
                </h3>
                <h4 className="font-open text-[18px] text-[#00B4D8] font-regular text-center dt:text-left">
                  AI Face Detection App
                </h4>
              </div>

              <div className="flex justify-evenly mt-[40px] flex-col tt:flex-row">
                <div className="flex flex-col tt:mr-[64px]">
                  <div className="flex items-center mb-[24px]">
                    <Image
                      className="mr-[16px]"
                      src="/Javascript.png"
                      alt="Javascript"
                      width={50}
                      height={50}
                      priority
                    />
                    <p className="text-black tracking-[0.5px] leading-[26px]">
                      Javascript
                    </p>
                  </div>
                  <div className="flex items-center mb-[24px]">
                    <Image
                      className="mr-[16px]"
                      src="/React.png"
                      alt="React"
                      width={50}
                      height={50}
                      priority
                    />
                    <p className="text-black tracking-[0.5px] leading-[26px]">
                      React
                    </p>
                  </div>
                  <div className="flex items-center mb-[24px]">
                    <Image
                      className="mr-[16px]"
                      src="/CSS.png"
                      alt="CSS"
                      width={50}
                      height={50}
                      priority
                    />
                    <p className="text-black tracking-[0.5px] leading-[26px]">
                      CSS
                    </p>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <div className="flex items-center mb-[24px]">
                    <Image
                      className="mr-[16px]"
                      src="/SQL.png"
                      alt="SQL"
                      width={50}
                      height={50}
                      priority
                    />
                    <p className="text-black tracking-[0.5px] leading-[26px]">
                      PostgreSQL
                    </p>
                  </div>
                  <div className="flex items-center mb-[24px]">
                    <Image
                      className="mr-[16px]"
                      src="/Node.png"
                      alt="Node.js"
                      width={50}
                      height={50}
                      priority
                    />
                    <p className="text-black tracking-[0.5px] leading-[26px]">
                      Node.js
                    </p>
                  </div>
                </div>
              </div>
              <button
                href="#"
                className="hover:text-[#00B4D8] text-[#495057] underline underline-offset-4 font-medium font-sans text-[18px] tracking-[1px] mt-[40px]  "
              >
                <a
                  href="https://65f062d55dd52100084346c7--warm-axolotl-4d8fc8.netlify.app/"
                  target="_blank"
                >
                  View website →
                </a>
              </button>
            </div>
          </div>

          <Image
            className="mt-[120px]"
            src="/Vector.svg"
            alt="Vector"
            width={42}
            height={10}
            priority
          />

          <div className="flex flex-col dt:flex-row mt-[120px] items-center">
            <div className="mb-[40px] flex flex-col items-center dt:items-start">
              <div className="flex flex-col text-left">
                <h3 className="font-open text-[28px] text-black font-regular text-center dt:text-left mb-[8px]">
                  Stelar TM
                </h3>
                <h4 className="font-open text-[18px] text-[#00B4D8] font-regular text-center dt:text-left">
                  Invoice & Stock Management
                </h4>
              </div>

              <div className="flex justify-evenly mt-[40px] flex-col tt:flex-row">
                <div className="flex flex-col tt:mr-[64px]">
                  <div className="flex items-center mb-[24px]">
                    <Image
                      className="mr-[16px]"
                      src="/Javascript.png"
                      alt="Javascript"
                      width={50}
                      height={50}
                      priority
                    />
                    <p className="text-black tracking-[0.5px] leading-[26px]">
                      Javascript
                    </p>
                  </div>
                  <div className="flex items-center mb-[24px]">
                    <Image
                      className="mr-[16px]"
                      src="/CSS.png"
                      alt="CSS"
                      width={50}
                      height={50}
                      priority
                    />
                    <p className="text-black tracking-[0.5px] leading-[26px]">
                      CSS
                    </p>
                  </div>
                  <div className="flex items-center mb-[24px]">
                    <Image
                      className="mr-[16px]"
                      src="/Tailwind.png"
                      alt="Tailwind"
                      width={50}
                      height={50}
                      priority
                    />
                    <p className="text-black tracking-[0.5px] leading-[26px]">
                      Tailwind
                    </p>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <div className="flex items-center mb-[24px]">
                    <Image
                      className="mr-[16px]"
                      src="/Next.png"
                      alt="Next.js"
                      width={50}
                      height={50}
                      priority
                    />
                    <p className="text-black tracking-[0.5px] leading-[26px]">
                      Next.js
                    </p>
                  </div>
                  <div className="flex items-center mb-[24px]">
                    <Image
                      className="mr-[16px]"
                      src="/Framer Motion.png"
                      alt="Framer Motion"
                      width={50}
                      height={50}
                      priority
                    />
                    <p className="text-black tracking-[0.5px] leading-[26px]">
                      Framer Motion
                    </p>
                  </div>
                </div>
              </div>
              <button
                href="#"
                className="hover:text-[#00B4D8] text-[#495057] underline underline-offset-4 font-medium  font-sans text-[18px] tracking-[1px] mt-[40px]"
              >
                <a
                  href="https://stelar-9iatokrmd-dev-edward-ts-projects.vercel.app/"
                  target="_blank"
                >
                  View website →
                </a>
              </button>
            </div>
            <div className="bg-stelar bg-cover w-[300px] h-[200px] tt:w-[450px] tt:h-[250px] lt:w-[550px] lt:h-[350px] dt:w-[650px] dt:h-[450px] rounded-[10px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] dt:ml-[64px]"></div>
          </div>

          <Image
            className="mt-[120px]"
            src="/Vector.svg"
            alt="Vector"
            width={42}
            height={10}
            priority
          />

          <div className="flex flex-col mt-[120px] items-center">
            <div className="flex flex-col text-center">
              <h3 className="font-open text-[28px] text-black font-regular text-center mb-[8px]">
                Landing pages
              </h3>

              <h4 className="font-open text-[18px] text-[#00B4D8] font-regular text-center">
                Various landing pages catered for different needs
              </h4>
            </div>

            <div className="flex flex-col tt:flex-row gap-5 mt-[40px] content-center justify-evenly">
              <div className="flex flex-col dt:flex-row gap-5 mt-[40px] content-center justify-center">
                <div className="flex items-center tt:mr-[64px]">
                  <Image
                    className="mr-[16px]"
                    src="/HTML.png"
                    alt="HTML"
                    width={50}
                    height={50}
                    priority
                  />
                  <p className="text-black tracking-[0.5px] leading-[26px]">
                    HTML
                  </p>
                </div>
                <div className="flex items-center tt:mr-[64px]">
                  <Image
                    className="mr-[16px]"
                    src="/CSS.png"
                    alt="CSS"
                    width={50}
                    height={50}
                    priority
                  />
                  <p className="text-black tracking-[0.5px] leading-[26px]">
                    CSS
                  </p>
                </div>
                <div className="flex items-center tt:mr-[64px]">
                  <Image
                    className="mr-[16px]"
                    src="/CSS Animations.png"
                    alt="CSS Animations"
                    width={50}
                    height={50}
                    priority
                  />
                  <p className="text-black tracking-[0.5px] leading-[26px]">
                    CSS Animations
                  </p>
                </div>
              </div>
              <div className="flex flex-col dt:flex-row gap-5 tt:mt-[40px] content-center justify-start">
                <div className="flex items-center dt:mr-[64px]">
                  <Image
                    className="mr-[16px]"
                    src="/Sass.png"
                    alt="Sass"
                    width={50}
                    height={50}
                    priority
                  />
                  <p className="text-black tracking-[0.5px] leading-[26px]">
                    Sass
                  </p>
                </div>
                <div className="flex items-center dt:mr-[64px]">
                  <Image
                    className="mr-[16px]"
                    src="/Bootstrap.png"
                    alt="Bootstrap"
                    width={50}
                    height={50}
                    priority
                  />
                  <p className="text-black tracking-[0.5px] leading-[26px]">
                    Bootstrap
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col dt:flex-row items-center justify-center mt-[120px]">
              <div className="dt:mr-[56px] mb-[80px] dt:mb-[0] flex flex-col justify-center items-center">
                <h3 className="font-open text-[28px] text-black font-regular text-left">
                  Admin
                </h3>
                <div className="my-[20px] bg-admin bg-cover w-[300px] h-[200px] tt:w-[450px] tt:h-[250px] lt:w-[550px] lt:h-[350px] dt:w-[650px] dt:h-[450px] rounded-[10px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"></div>

                <button
                  href="#"
                  className="hover:text-[#00B4D8] text-[#495057] underline underline-offset-4 font-medium font-sans text-[18px] tracking-[1px] "
                >
                  <a
                    href="https://devedwardt.github.io/Finance/"
                    target="_blank"
                  >
                    View website →
                  </a>
                </button>
              </div>

              <div className="flex flex-col justify-center items-center">
                <h3 className="font-open text-[28px] text-black font-regular text-left">
                  Dashboard
                </h3>
                <div className="my-[20px] bg-dashboard bg-cover w-[300px] h-[200px] tt:w-[450px] tt:h-[250px] lt:w-[550px] lt:h-[350px] dt:w-[650px] dt:h-[450px] rounded-[10px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"></div>

                <button
                  href="#"
                  className="hover:text-[#00B4D8] text-[#495057] underline underline-offset-4 font-medium  font-sans text-[18px] tracking-[1px] "
                >
                  <a
                    href="https://devedwardt.github.io/Dashboard/"
                    target="_blank"
                  >
                    View website →
                  </a>
                </button>
              </div>
            </div>

            <div className="flex flex-col dt:flex-row items-center justify-center mt-[120px]">
              <div className="dt:mr-[56px] mb-[80px] dt:mb-[0] flex flex-col justify-center items-center">
                <h3 className="font-open text-[28px] text-black font-regular text-left">
                  Clothing store
                </h3>
                <div className="my-[20px] bg-play bg-cover w-[300px] h-[200px] tt:w-[450px] tt:h-[250px] lt:w-[550px] lt:h-[350px] dt:w-[650px] dt:h-[450px] rounded-[10px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"></div>

                <button className="hover:text-[#00B4D8] text-[#495057] underline underline-offset-4 font-medium font-sans text-[18px] tracking-[1px] ">
                  <a href="https://devedwardt.github.io/Play/" target="_blank">
                    {" "}
                    View website →
                  </a>{" "}
                </button>
              </div>

              <div className="flex flex-col justify-center items-center">
                <h3 className="font-open text-[28px] text-black font-regular text-left">
                  Streaming service
                </h3>
                <div className="my-[20px] bg-stream bg-cover w-[300px] h-[200px] tt:w-[450px] tt:h-[250px] lt:w-[550px] lt:h-[350px] dt:w-[650px] dt:h-[450px] rounded-[10px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"></div>

                <button className="hover:text-[#00B4D8] text-[#495057] underline underline-offset-4 font-medium  font-sans text-[18px] tracking-[1px] ">
                  <a
                    href="https://devedwardt.github.io/XStream/"
                    target="_blank"
                  >
                    {" "}
                    View website →
                  </a>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="pt-[120px] pb-[20px] justify-center items-center bg-black relative overflow-y-hidden overflow-x-hidden"
        id="contact"
      >
        <div className="flex justify-center items-center flex-col">
          <h3 className="font-open text-[28px] text-white font-bold text-center">
            Contact
          </h3>
          <Image
            className="mt-[16px]"
            src="/Vector.svg"
            alt="Vector"
            width={42}
            height={10}
            priority
          />
          <div className="flex justify-center items-center mt-[64px]">
            <div className="flex justify-center items-center flex-col">
              <div className="flex justify-center items-center">
                <div className="w-[300px] bg-white p-[20px] rounded-[16px] z-20">
                  <Image
                    className="mb-[24px]"
                    src="/Mail.svg"
                    alt="Mail"
                    width={50}
                    height={50}
                    priority
                  />
                  <h4 className="font-open text-[18px] text-black font-semibold mb-[12px]">
                    Let's get in touch!
                  </h4>
                  <div className="mt-[32px]">
                    <div className="flex mb-[24px]">
                      <Image
                        src="/Email.svg"
                        alt="Email"
                        width={25}
                        height={25}
                        priority
                      />
                      <p className="hover:text-[#00B4D8] text-[#495057] underline underline-offset-4 font-medium font-sans text-[16px] ml-[16px] tracking-[1px]">
                        <a href="mailto:devedwardt@gmail.com">Email</a>
                      </p>
                    </div>

                    <div className="flex mb-[24px]">
                      <Image
                        src="/LinkedIn.svg"
                        alt="LinkedIn"
                        width={25}
                        height={25}
                        priority
                      />
                      <p className="hover:text-[#00B4D8] text-[#495057] underline underline-offset-4 font-medium font-sans text-[16px] ml-[16px] tracking-[1px]">
                        <a
                          href="https://www.linkedin.com/in/edward-telecan-961873293/"
                          target="_blank"
                        >
                          LinkedIn
                        </a>
                      </p>
                    </div>
                    <div className="flex mb-[24px]">
                      <Image
                        src="/upwork.svg"
                        alt="LinkedIn"
                        width={25}
                        height={25}
                        priority
                      />
                      <p className="hover:text-[#00B4D8] text-[#495057] underline underline-offset-4 font-medium font-sans text-[16px] ml-[16px] tracking-[1px]">
                        <a
                          href="https://www.upwork.com/freelancers/~012000b5952683297b"
                          target="_blank"
                        >
                          Upwork
                        </a>
                      </p>
                    </div>
                    <div className="flex mb-[24px]">
                      <Image
                        src="/Github.svg"
                        alt="Github"
                        width={25}
                        height={25}
                        priority
                      />
                      <p className="hover:text-[#00B4D8] text-[#495057] underline underline-offset-4 font-medium font-sans text-[16px] ml-[16px] tracking-[1px]">
                        <a href="https://github.com/DevEdwardT" target="_blank">
                          Github
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h4 className="text-[#ffffff] dt:text-[#ADB5BD] tracking-[0.5px] text-[16px] mt-[80px] z-20 text-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-[8px] rounded-full">
            Copyright © 2024. All rights are reserved.
          </h4>
        </div>
        <div className="w-[800px] h-[600px] rounded-[16px] absolute rotate-12 top-64 -right-80 z-[1] bg-gradient-to-r from-[#00B4D8] to-[#4DB6AC]"></div>
        <div className="w-[800px] h-[600px] rounded-[16px] absolute rotate-12 top-64 -left-80 z-[1]  bg-gradient-to-r from-[#D27E00] to-[#F72B1E] hidden lt:inline-block"></div>
      </section>
    </main>
  );
}
