import React, {useState} from "react"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {Dialog, DialogPanel} from "@headlessui/react";
import {Link, NavLink} from "react-router-dom";

const navigation = [
    {name: 'Home', href: '/'},
    {name: 'About', href: '/about'},
    {name: 'Work', href: '/work'},
    {name: 'Contact', href: '/contact'},
]

interface Props {
    className?: string,
}

const Header: React.FC<Props> = ({className}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <header className={className + " object-cover inset-x-0 top-0 pt-6 z-50 ms-20 me-20"}>
            <nav aria-label="Global" className="flex items-center justify-between">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5 text-[18px] text-[#0B0C0E]">
                        @Ayush Barnwal
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 cursor-pointer"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6"/>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12 lg:justify-end">
                    {navigation.map((item) => (
                        <Link hidden={item.name === "Home"} key={item.name} to={item.href}
                              className="text-[18px] font-semibold text-[#0B0C0E]">
                            {item.name}
                        </Link>
                    ))}
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50"/>
                <DialogPanel
                    className="bg-[#0B0C0E] fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:w-[700px] sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-end">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 p-2.5 text-gray-700 cursor-pointer rounded-full bg-white"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6"/>
                        </button>
                    </div>
                    <div className="ms-16 mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-6xl font-semibold text-white hover:bg-gray-500"
                                    >
                                        {({isActive}) => (
                                            <div className="grid grid-cols-10 items-center">
                                                <div className={isActive ? "w-2 h-2 bg-white rounded-full" : ""}/>
                                                <p className="col-span-9">{item.name}</p>
                                            </div>
                                        )}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}

export default Header