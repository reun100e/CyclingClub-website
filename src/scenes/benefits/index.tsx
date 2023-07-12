import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Group Rides",
    description:
      "Join our group rides and explore the scenic routes in and around Trivandrum. Whether you prefer leisurely rides or challenging routes, we have something for everyone.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Training Sessions",
    description:
      "Enhance your cycling skills and fitness levels with our training sessions conducted by experienced coaches. From basic techniques to advanced training, we provide valuable guidance to help you improve.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Competitions",
    description:
      "Test your mettle in our exciting cycling competitions. We organize both local and regional competitions, giving you the opportunity to showcase your skills and compete with fellow cyclists.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Social Events",
    description:
      "Beyond cycling, we host social events to foster camaraderie among our members. From group dinners to community service projects, we believe in creating a strong bond within our cycling community.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST CYCLING.</HText>
          <p className="my-5 text-sm">
            At the Trivandrum Cycling Club, we believe in the power of community
            and the joy of cycling. We organize a variety of activities
            throughout the year to keep our members engaged and motivated. Some
            of our activities include:
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    ABOUT{" "}
                    <span className="text-primary-500">THE TRIVANDRUM CYCLING CLUB</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                The Trivandrum Cycling Club was founded in [year] with the aim
                of bringing together cycling enthusiasts from all walks of life.
                Our mission is to promote cycling as a healthy and sustainable
                means of transportation, recreation, and sport.
              </p>
              <p className="mb-5">
                We organize regular group rides, training sessions, and cycling
                events to cater to cyclists of different levels and interests.
                Our club welcomes riders of all ages and abilities, from
                beginners looking to improve their skills to experienced riders
                seeking new challenges.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
