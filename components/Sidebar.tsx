import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Image
        src="https://imageupload.io/ib/TLOKoZEIv8P3pf1_1699076877.jpg"
        alt="avatar"
        className="mx-auto border rounded-full"
        width={128}
        height={128}
        // layout="intrinsic"
        // quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green ">Sorakrit</span> Chinphet
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
      Team Leader Backend
      </p>
      {/* Resume */}
      <Link
        href="https://www.youtube.com/watch?v=CcyveFhvKtI&list=PL7iC7aAJ_ibVCF-2ZK6Qj_fcS4yguJDG9&index=29"
        download=""
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </Link>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
        <Link href="https://www.youtube.com/watch?v=CcyveFhvKtI&list=PL7iC7aAJ_ibVCF-2ZK6Qj_fcS4yguJDG9&index=29" >
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </Link>
        <Link href="https://www.youtube.com/watch?v=CcyveFhvKtI&list=PL7iC7aAJ_ibVCF-2ZK6Qj_fcS4yguJDG9&index=29" >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </Link>
        <Link href="https://www.youtube.com/watch?v=CcyveFhvKtI&list=PL7iC7aAJ_ibVCF-2ZK6Qj_fcS4yguJDG9&index=29">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </Link>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span> Bangkok, Thailand </span>
        </div>
        <p className="my-2"> peeczpzadlg@gmail.com </p>
        <p className="my-2"> (+66) 989815548 </p>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:peeczpzadlg@gmail.com")}
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Toggle Theme
      </button>
    </>
  );
};

export default Sidebar;