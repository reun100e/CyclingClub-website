import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Group Rides",
    description:
      "Join our group rides and explore the beautiful landscapes of Trivandrum and its surroundings. We offer rides for all skill levels, from casual weekend rides to more challenging routes for experienced cyclists. Our group rides not only provide an opportunity to connect with fellow cyclists but also help improve endurance, speed, and cycling techniques",
    image: image1,
  },
  {
    name: "Training Sessions",
    image: image2,
  },
  {
    name: "Training Sessions",
    description:
      "We believe in continuous improvement, and our training sessions are designed to help cyclists enhance their skills and fitness levels. Led by experienced coaches, these sessions cover various aspects of cycling, including proper form and technique, endurance training, hill climbing, and sprinting. Whether you are a beginner or an advanced rider, our training sessions cater to your specific needs.",
    image: image3,
  },
  {
    name: "Competitions",
    description:
      "Our club organizes both local and regional cycling competitions to provide a platform for our members to showcase their talent and test their abilities. From thrilling criterium races to challenging time trials, our competitions offer a competitive yet friendly environment for cyclists of all levels. We have had several members excel in these competitions, earning podium finishes and accolades.",
    image: image4,
  },
  {
    name: "Community Engagement",
    image: image5,
  },
  {
    name: "Community Engagement",
    description:
      "We believe in giving back to the community and using cycling as a means to create a positive impact. Our club actively participates in community service projects, charity rides, and awareness campaigns to promote cycling and its benefits. By engaging with the community, we strive to inspire others to adopt cycling as a sustainable mode of transportation and a healthy lifestyle choice.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Activities = ({ setSelectedPage }: Props) => {
  return (
    <section id="activities" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Activities)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>ACTIVITIES & ACHIEVEMENTS</HText>
            <p className="py-5">
              At the Trivandrum Cycling Club, we are dedicated to providing our
              members with a wide range of cycling activities and fostering an
              environment that encourages personal growth and achievement. Here
              are some of the activities we organize and the notable
              achievements of our club:
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Activities;
