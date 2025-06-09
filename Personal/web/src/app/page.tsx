import Image from "next/image";
import Head from "next/head";

export default function Home() {
    return (
        <div className="bg-white dark:bg-gray-800">
            <Head>
                <title>Yayan D. Wicaksono | Profile</title>
            </Head>
            <div className="container mx-auto p-4">
                {/* Header Section */}
                <div className="flex items-center mb-8">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                        <Image
                            src="/avatar.jpg"
                            alt="Yayan D. Wicaksono"
                            width={64}
                            height={64}
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Yayan D. Wicaksono</h1>
                        <p className="text-gray-500">Programmer @easySoft Indonesia</p>
                        <a
                            href="https://website.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded mt-2 hover:bg-gray-300 transition duration-200"
                        >
                            website.com
                        </a>
                    </div>
                </div>

                {/* About Section */}
                <div className="mb-8">
                    <h2 className="text-lg font-bold mb-2">About</h2>
                    <p className="text-gray-500">
                        I'm a passionate UX designer striving to create intuitive and engaging experiences. I'm a big
                        believer that things can always be simpler than we think.
                    </p>
                </div>

                {/* Work Experience Section */}
                <div>
                    <h2 className="text-lg font-bold mb-2">Work Experience</h2>
                    <ul className="list-none">

                        {/* Item 2 */}
                        <li className="mb-4 flex items-start">
                            <div className="mr-4">
                                <span className="text-gray-500">2008 — now</span>
                            </div>
                            <div>
                                <h3 className="text-base font-medium">
                                    Programmer{" "}
                                    <a
                                        href="#"
                                        className="text-blue-500 text-sm"
                                        title="Visit company website"
                                    >
                                        ↗
                                    </a>
                                </h3>
                                <p className="text-gray-500">PT easySoft Indonesia</p>
                                <div className="grid grid-cols-3 gap-4 mt-2 w-full place-items-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="133" height="22"
                                             viewBox="0 0 133 22">
                                            <path fill="currentColor"
                                                  d="M80.0536 14.2601C80.0536 11.877 81.7747 9.99706 83.946 9.99706C86.1172 9.99706 87.7059 11.8241 87.7059 14.2601C87.7059 16.6961 86.0907 18.576 83.946 18.576C81.8012 18.576 80.0536 16.6696 80.0536 14.2601ZM72.5868 20.9061H75.6318V7.66697H72.5868V20.9061ZM72.1102 3.24509C72.1102 4.38366 73.0369 5.3104 74.1225 5.3104C75.2081 5.3104 76.1084 4.38366 76.1084 3.24509C76.1084 2.18596 75.2081 1.28569 74.1225 1.28569C73.0369 1.28569 72.1102 2.18596 72.1102 3.24509ZM60.1684 14.2336C60.1684 11.8505 61.916 9.99706 64.1667 9.99706C66.4173 9.99706 68.1649 11.8505 68.1649 14.2336C68.1649 16.6166 66.3908 18.576 64.1667 18.576C61.9425 18.576 60.1684 16.6431 60.1684 14.2336ZM57.0705 14.2336C57.0705 18.2053 60.1949 21.3298 64.1667 21.3298C68.1384 21.3298 71.2628 18.2053 71.2628 14.2336C71.2628 10.2618 68.1914 7.24331 64.1667 7.24331C60.142 7.24331 57.0705 10.2883 57.0705 14.2336ZM48.8357 20.9061H51.8807V13.9688C51.8807 11.2151 53.337 9.99706 55.773 9.99706C56.2232 9.99706 56.5674 10.0235 56.8851 10.103V7.42866C56.5674 7.32275 56.0114 7.24331 55.4024 7.24331C51.2717 7.24331 48.8357 9.83819 48.8357 13.9688V20.9061ZM36.6292 14.2601C36.6292 11.877 38.3503 9.99706 40.5216 9.99706C42.6928 9.99706 44.2815 11.8241 44.2815 14.2601C44.2815 16.6961 42.6663 18.576 40.5216 18.576C38.3768 18.576 36.6292 16.6696 36.6292 14.2601ZM33.5313 14.2601C33.5313 18.0994 36.6028 21.3298 40.2303 21.3298C41.7396 21.3298 43.1164 20.7208 43.9373 19.7146H44.0696V20.9061H47.1147V0.226562H44.0696V8.75258H43.9373C43.1429 7.79936 41.766 7.24331 40.2303 7.24331C36.5763 7.24331 33.5313 10.4472 33.5313 14.2601ZM20.1862 20.9061H23.2312V13.148C23.2312 11.2945 24.4757 9.99706 26.1968 9.99706C27.9179 9.99706 29.1624 11.2945 29.1624 13.148V20.9061H32.2074V13.148C32.2074 9.91762 29.639 7.24331 26.1968 7.24331C22.7546 7.24331 20.1862 9.91762 20.1862 13.148V20.9061ZM6.20569 12.9626L9.48899 3.56283H9.64786L12.9312 12.9626H6.20569ZM0.00976562 20.9061H3.45194L5.17303 15.9812H13.9638L15.6849 20.9061H19.1271L11.4749 0.226562H7.66199L0.00976562 20.9061ZM83.6547 21.3298C85.164 21.3298 86.5408 20.7208 87.3617 19.7146H87.494V20.9061H90.5391V0.226562H87.494V8.75258H87.3617C86.5673 7.79936 85.1904 7.24331 83.6547 7.24331C80.0007 7.24331 76.9557 10.4472 76.9557 14.2601C76.9557 18.0729 80.0272 21.3298 83.6547 21.3298Z"></path>
                                            <image x="97" y="2" width="36" height="21"
                                                   href="data:image/png;base64,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"></image>
                                        </svg>
                                    </div>
                                    <div className="w-24 h-24 overflow-hidden rounded">
                                        <Image
                                            src="/IOS_18_Logo.png"
                                            alt="Work Example"
                                            width={100}
                                            height={100}
                                            className="object-contain w-full h-full"
                                        />
                                    </div>
                                    <div className="w-24 h-24 overflow-hidden rounded">
                                        <Image
                                            src="/java-logo.png"
                                            alt="Work Example"
                                            width={100}
                                            height={100}
                                            className="object-contain w-full h-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-lg font-bold mb-2">Writing</h2>
                    <ul className="list-none">
                        {/* Item 5 */}
                        <li className="mb-4 flex items-start">
                            <div className="mr-4">
                                <span className="text-gray-500">2010 — 2012</span>
                            </div>
                            <div>
                                <h3 className="text-base font-medium">
                                    Art Assistant at Studio X{" "}
                                    <a
                                        href="#"
                                        className="text-blue-500 text-sm"
                                        title="Visit company website"
                                    >
                                        ↗
                                    </a>
                                </h3>
                                <p className="text-gray-500">Cincinnati, OH</p>
                            </div>
                        </li>

                        {/* Item 5 */}
                        <li className="mb-4 flex items-start">
                            <div className="mr-4">
                                <span className="text-gray-500">2010 — 2012</span>
                            </div>
                            <div>
                                <h3 className="text-base font-medium">
                                    Art Assistant at Studio X{" "}
                                    <a
                                        href="#"
                                        className="text-blue-500 text-sm"
                                        title="Visit company website"
                                    >
                                        ↗
                                    </a>
                                </h3>
                                <p className="text-gray-500">Cincinnati, OH</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Work Experience Section */}
                <div>
                    <h2 className="text-lg font-bold mb-2">Education</h2>
                    <ul className="list-none">

                        {/* Item 5 */}
                        <li className="mb-4 flex items-start">
                            <div className="mr-4">
                                <span className="text-gray-500">2010 — 2012</span>
                            </div>
                            <div>
                                <h3 className="text-base font-medium">
                                    Art Assistant at Studio X{" "}
                                    <a
                                        href="#"
                                        className="text-blue-500 text-sm"
                                        title="Visit company website"
                                    >
                                        ↗
                                    </a>
                                </h3>
                                <p className="text-gray-500">Cincinnati, OH</p>
                            </div>
                        </li>

                        {/* Item 5 */}
                        <li className="mb-4 flex items-start">
                            <div className="mr-4">
                                <span className="text-gray-500">2010 — 2012</span>
                            </div>
                            <div>
                                <h3 className="text-base font-medium">
                                    Art Assistant at Studio X{" "}
                                    <a
                                        href="#"
                                        className="text-blue-500 text-sm"
                                        title="Visit company website"
                                    >
                                        ↗
                                    </a>
                                </h3>
                                <p className="text-gray-500">Cincinnati, OH</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
