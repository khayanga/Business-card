import React from 'react'
import pic2 from './Image/pic2.jpg'
import{AiFillGithub ,AiFillInstagram, AiFillLinkedin} from "react-icons/ai"

export const Card = () => {
  return (
    <div className="bg-blue-50 rounded-lg border p-4 mx-auto w-96 drop-shadow-2xl">
            <img  src={pic2} alt="Placeholder Image" className="w-96h-96 rounded-md object-cover"/>
            <div className="px-1 py-4">
              <div className="font-bold text-xl mb-2 text-gray-700 text-center">Frontend Developer || UI Designer</div>
              <h1 className='font-bold  text-xl m-2 text-center '>Virgil Khayanga</h1>

              <h2 className='font-medium'>About</h2>
              <p className="text-gray-700 text-base">
              I am a passionate and experienced React developer
               dedicated to crafting high-quality web applications that deliver
                exceptional user experiences. With a strong background in front-end 
                development and a deep understanding of the React ecosystem,
                 I thrive on turning complex
               ideas into elegant, interactive, and responsive interfaces.
              </p>
              <h2 className=' font-medium  mt-5'>Skills</h2>
              <p className="text-gray-700 text-base">
              My skill set includes,Proficiency in HTML, CSS, and JavaScript, with a focus on writing clean, 
              maintainable code.Extensive experience with React and its ecosystem, 
              including state management libraries like Redux or Mobx.Knowledge of modern JavaScript ES6/ES7 features and best practices.
                Strong problem-solving abilities and a commitment to delivering pixel-perfect user interfaces.
              </p>
            
            </div>
            <div className="px-1 py-4 mt-2 flex  space-x-4 items-center justify-center text-xl">
              <a href="https://github.com/khayanga"><AiFillGithub/></a>
              <a href="https://www.instagram.com/__khayanga._/"><AiFillInstagram/></a>
              <a href="https://www.linkedin.com/in/virgil-khayanga-113b18262/"><AiFillLinkedin/></a>
            </div>
    </div>
    

  )
}
