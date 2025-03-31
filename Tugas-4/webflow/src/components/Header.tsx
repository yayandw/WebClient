import {useState} from "react"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {Dialog, DialogPanel} from "@headlessui/react";

const navigation = [
    {name: 'Home', href: '/'},
    {name: 'About', href: '/about'},
    {name: 'Work', href: '#'},
    {name: 'Contact', href: '/contact'},
]


const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <header className="fixed inset-x-0 top-0 pt-6 z-50 ms-20 me-20">
            <nav aria-label="Global" className="flex items-center justify-between">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5 text-[18px] text-[#0B0C0E]">
                        @Ayush Barnwal
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6"/>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12 lg:justify-end">
                    {navigation.map((item) => (
                        <a hidden={item.name === "Home"} key={item.name} href={item.href}
                           className="text-[18px] font-semibold text-[#0B0C0E]">
                            {item.name}
                        </a>
                    ))}
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50"/>
                <DialogPanel
                    className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6"/>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
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