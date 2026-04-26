import { Slide } from "react-awesome-reveal";
import { MdOutlineAttachMoney } from "react-icons/md";
import { Link } from "react-scroll";

const Pricing = () => {
  return (
    <div id="pricing" className="p-2 mt-12 md:mt-14">
      <Slide>
        <h5 className="border flex rounded-3xl py-2 px-5 w-min ms-2 md:ms-28 mb-5 md:mb-10">
          <MdOutlineAttachMoney style={{ fontSize: "1.44rem" }} />{" "}
          <span className="ms-2">PRICING</span>
        </h5>
      </Slide>
      <div className="md:w-9/12 mx-auto">
        <h3
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="text-3xl md:text-6xl ms-2 mb-8"
        >
          My <span className="text-green-500">Pricing</span>
        </h3>
        <section className="md:grid md:grid-cols-2 gap-4">
          {/* 1 */}
          <div
            data-aos="fade-down-right"
            data-aos-duration="2000"
            className="border rounded-2xl p-4 md:w-96 w-full "
          >
            <div className="flex justify-between p-3">
              <h3>BASIC</h3>
              <p className="text-end">
                Have design ready to build? <br />
                or small budget
              </p>
            </div>

            <div>
              <p className="text-6xl text-green-500">$49</p>
              <div className="divider"></div>
              <ul className="h-48">
                <li>Need your wireframe</li>
                <li>Design with Figma</li>
                <li>Implement with React, MongoDB, NodeJs, ExpressJs</li>
                <li>Work in business days, no weekend.</li>
                <li>Support 6 months</li>
              </ul>
              <button className="btn btn-outline w-full rounded-3xl my-10 text-green-500 hover:text-black hover:font-extrabold hover:bg-gradient-to-r from-cyan-400 via-green-300 to-green-900 ">
                <MdOutlineAttachMoney style={{ fontSize: "1.5rem" }} />
                PICK THIS PACKAGE
              </button>
            </div>
          </div>
          {/* 2 */}
          <div
            data-aos="fade-down-left"
            data-aos-duration="2000"
            className="border rounded-2xl p-4 md:w-96 w-full"
          >
            <div className="flex justify-between p-3">
              <h3>PREMIUM</h3>
              <p className="text-end">
                Not have any design? <br />
                Leave it for me
              </p>
            </div>

            <div>
              <p className="text-6xl text-green-500">$99</p>
              <div className="divider"></div>
              <ul className="h-48">
                <li>Don't need wireframe or anything</li>
                <li>Design with Figma</li>
                <li>Implement with React, MongoDB, NodeJs, ExpressJs</li>
                <li>Work with both weekend</li>
                <li>12 months support</li>
                <li>Your project alway be priority</li>
                <li>Your project alway be priority</li>
              </ul>
              <button className="btn btn-outline w-full rounded-3xl my-10 text-green-500 hover:text-black hover:font-extrabold hover:bg-gradient-to-r from-cyan-400 via-green-300 to-green-900 ">
                <MdOutlineAttachMoney style={{ fontSize: "1.5rem" }} />
                PICK THIS PACKAGE
              </button>
            </div>
          </div>
        </section>
        <p className="mt-8 ms-4">
          Don't find any package match with your plan! Want to setup a new
          tailor-made package for only you?.{" "}
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            {" "}
            <span className="text-green-500 underline">Contact Us</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Pricing;
