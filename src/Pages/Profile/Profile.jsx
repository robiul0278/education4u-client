import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import edit from "../../assets/edit.png"

const Profile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    console.log(updateUserProfile)
    return (
        <div className="container mx-auto px-4 py-8">
            <div className=" mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <div className="relative">
                    <div className="h-20 bg-gradient-to-br from-blue-600 to-purple-600"></div>
                    <div className="w-32 h-32 border-4 border-white rounded-full overflow-hidden absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                        <img src={user?.photoURL} alt="Profile Picture" className="object-cover w-full h-full" />
                    </div>
                </div>
                <div className="text-center mt-16" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1 className="text-3xl font-semibold text-gray-800">{user?.displayName}</h1>
                    <p className="text-gray-600">Computer Science Major</p>
                    <img src={edit} alt="" className="w-6" />
                </div>

                <div className="border-t border-gray-300 mt-8"></div>
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2 text-gray-800">About Me</h2>
                    <p className="text-gray-700">Hi there! Im a passionate computer science major with a strong interest in web development and software engineering. I love exploring new technologies and building exciting projects.</p>
                </div>
                <div className="border-t border-gray-300 mt-4"></div>
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2 text-gray-800">Contact Information</h2>
                    <ul className="text-gray-700">
                        <li className="flex items-center mb-2">
                            <svg className="h-5 w-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3c.81 0 1.649.156 2.33.372 2.986 1.042 5.37 3.426 6.412 6.411.214.68.372 1.55.372 2.33 0 4.418-3.582 8-8 8-4.418 0-8-3.582-8-8 0-.78.157-1.65.372-2.33 1.042-2.985 3.426-5.369 6.412-6.411C10.351 3.156 11.22 3 12 3zM12 21c3.313 0 6-2.687 6-6 0-3.313-2.687-6-6-6-3.313 0-6 2.687-6 6 0 3.313 2.687 6 6 6zm5-11h-2a1 1 0 00-1 1v3a1 1 0 001 1h2a1 1 0 001-1v-3a1 1 0 00-1-1zm-4 0H9a1 1 0 00-1 1v3a1 1 0 001 1h4a1 1 0 001-1v-3a1 1 0 00-1-1z"></path></svg>
                            {user?.email}
                        </li>
                        <li className="flex items-center mb-2">
                            <svg className="h-5 w-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13c0-1.657-1.285-3-2.859-3.011-.923-.755-1.994-1.307-3.142-1.636-1.196-.337-2.428-.539-3.652-.604A10.108 10.108 0 009 5c-2.197 0-4.242.685-5.958 1.849A9.911 9.911 0 002 13c0 2.347.813 4.512 2.162 6.203A15.042 15.042 0 009 21a15.042 15.042 0 004.838-.797A10.108 10.108 0 0019 17c1.424 0 2.77.292 3.983.818A1 1 0 0024 17v-4a1 1 0 00-1-1h-4a1 1 0 00-1 1v4a1 1 0 001 1zM14 3h-4a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V4a1 1 0 00-1-1z"></path></svg>
                            (123) 456-7890
                        </li>
                    </ul>
                </div>
                <div className="border-t border-gray-300 mt-4"></div>
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2 text-gray-800">Education</h2>
                    <p className="text-gray-700"><span className="font-semibold">Bachelor of Science in Computer Science</span> - University of Example</p>
                    <p className="text-gray-700">Expected Graduation: May 20XX</p>
                </div>
                <div className="border-t border-gray-300 mt-4"></div>
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2 text-gray-800">Extracurricular Activities</h2>
                    <p className="text-gray-700"><span className="font-semibold">Web Development Club</span> - Vice President</p>
                    <p className="text-gray-700">September 20XX - Present</p>
                    <p className="text-gray-700">Organizing web development workshops and events for students.</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;