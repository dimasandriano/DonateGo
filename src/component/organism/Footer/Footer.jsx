import React from "react";
import { GoMarkGithub } from "react-icons/go";
function Footer() {
	return (
		<div>
			<footer className="text-slate-500">
				<div className="border-t border-slate-200 bg-slate-100 pt-5 text-base">
					<div className="mx-auto max-w-screen-xl px-4 py-2">
						<div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
							<div
								className="col-span-4 md:col-span-8 lg:col-span-4"
								aria-labelledby="footer-header">
								<a
									id="WindUI-5-logo"
									aria-label="WindUI logo"
									aria-current="page"
									className="mb-6 flex items-center gap-2 whitespace-nowrap text-base font-medium leading-6 text-slate-700 focus:outline-none"
									href="#">
									<svg
										width="300"
										height="300"
										viewBox="0 0 300 300"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 shrink-0 bg-emerald-500">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M88.1121 88.1134L150.026 150.027L150.027 150.027L150.027 150.027L150.028 150.027L150.027 150.026L88.1133 88.1122L88.1121 88.1134ZM273.878 273.877C272.038 274.974 196.128 319.957 165.52 289.349L88.1124 211.942L26.1434 273.911C26.1434 273.911 -20.3337 196.504 10.651 165.519L88.1121 88.1134L26.1417 26.1433C26.1417 26.1433 69.6778 0.00338007 104.519 0H0V300H300V0H104.533C116.144 0.00112664 126.789 2.90631 134.534 10.651L211.941 88.1123L273.877 26.177C274.974 28.0159 319.957 103.926 289.349 134.535L211.942 211.942L273.878 273.877ZM273.878 273.877L273.912 273.857V273.911L273.878 273.877ZM273.877 26.177L273.911 26.1429H273.857C273.857 26.1429 273.863 26.1544 273.877 26.177Z"
											fill="#f1f5f9"
										/>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M0 0H300V300H0V0ZM150.026 150.025C121.715 99.731 88.1131 88.1122 88.1131 88.1122L10.6508 165.519C10.6508 165.519 26.143 150.027 150.026 150.027H150.027C150.026 150.027 150.026 150.027 150.026 150.027L150.026 150.027C99.731 178.339 88.1124 211.941 88.1124 211.941L165.52 289.348C165.52 289.348 150.032 273.86 150.027 150.027H150.029C178.341 200.323 211.944 211.942 211.944 211.942L289.352 134.535C289.352 134.535 273.864 150.023 150.027 150.027V150.027L150.027 150.027C200.322 121.715 211.941 88.1125 211.941 88.1125L134.534 10.651C134.534 10.651 150.026 26.1431 150.026 150.025ZM150.027 150.027L150.026 150.027C150.026 150.026 150.026 150.026 150.026 150.025C150.026 150.025 150.027 150.026 150.027 150.027ZM150.027 150.027L150.027 150.026L150.027 150.027C150.027 150.027 150.027 150.027 150.027 150.027L150.027 150.027ZM150.027 150.027C150.027 150.027 150.027 150.027 150.027 150.027H150.027L150.027 150.027Z"
											fill="rgba(255, 255, 255, .2)"
										/>
									</svg>
									DonateGo
								</a>
								<p>
									Expertly made, responsive, accessible components in React and HTML
									ready to be used on your website or app. Just copy and paste them on
									your Tailwind CSS project.
								</p>
							</div>
							<nav
								className="col-span-2 md:col-span-4 lg:col-span-2"
								aria-labelledby="footer-product-5-logo">
								<h3
									className="mb-6 text-base font-medium text-slate-700"
									id="footer-product-5-logo">
									Product
								</h3>
								<ul>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
											Features
										</a>
									</li>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
											Customers
										</a>
									</li>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
											Why us?
										</a>
									</li>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
											Pricing
										</a>
									</li>
								</ul>
							</nav>
							<nav
								className="col-span-2 md:col-span-4 lg:col-span-2"
								aria-labelledby="footer-docs-5-logo">
								<h3
									className="mb-6 text-base font-medium text-slate-700"
									id="footer-docs-5-logo">
									Docs & Help
								</h3>
								<ul>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
											Documentation
										</a>
									</li>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
											Training
										</a>
									</li>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
											System status
										</a>
									</li>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
											FAQ's
										</a>
									</li>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
											Help Center
										</a>
									</li>
								</ul>
							</nav>
							<nav
								className="col-span-2 md:col-span-4 lg:col-span-2"
								aria-labelledby="footer-about-5-logo">
								<h3
									className="mb-6 text-base font-medium text-slate-700"
									id="footer-about-5-logo">
									About us
								</h3>
								<ul>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
											About us
										</a>
									</li>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
											Careers
										</a>
									</li>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
											Leadership
										</a>
									</li>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
											Blog
										</a>
									</li>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
											Events
										</a>
									</li>
								</ul>
							</nav>
							<nav
								className="col-span-2 md:col-span-4 lg:col-span-2"
								aria-labelledby="footer-get-in-touch-5-logo">
								<h3
									className="mb-6 text-base font-medium text-slate-700"
									id="footer-get-in-touch-5-logo">
									Get in touch
								</h3>
								<ul>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
											Contact
										</a>
									</li>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
											Support
										</a>
									</li>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
											Partners
										</a>
									</li>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
											Join research
										</a>
									</li>
								</ul>
							</nav>
						</div>
						<div className="py-2 text-sm border-t">
							<div className="container mx-auto">
								<div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
									<div className="col-span-2 md:col-span-4 lg:col-span-6">
										Copyright 2023 DonateGo
									</div>
									<nav
										aria-labelledby="footer-social-links-light"
										className="col-span-2 text-right md:col-span-4 lg:col-span-6">
										<h2 className="sr-only" id="footer-social-links-light">
											Social Media Links
										</h2>
										<ul className="flex items-center justify-end gap-4">
											<li>
												<a
													href="#"
													className="transition-colors duration-300 hover:text-emerald-600 focus:text-emerald-700">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 48 48"
														height="16"
														width="16"
														className="w-4 h-4 shrink-0"
														role="graphics-symbol"
														aria-labelledby="title-tb01-light desc-tb01-light">
														<title id="title-tb01-light">Icon title</title>
														<desc id="desc-tb01-light">
															A more detailed description of the icon
														</desc>
														<path
															fill="currentColor"
															fillRule="evenodd"
															d="M37.2491 3.30238C37.0498 2.18649 36.0513 1.49746 34.9878 1.50395C32.2606 1.5206 29.7927 1.60328 27.6333 1.96988C25.4705 2.33708 23.584 2.99414 22.038 4.18283C18.9929 6.52415 17.4377 10.7872 17.3724 18.3217H11.9552C10.9254 18.3217 9.94522 18.9739 9.74313 20.0674C9.51312 21.312 9.33088 23.311 9.75643 25.8014C9.95527 26.9651 10.9939 27.7324 12.1233 27.7324H17.3703V44.3867C17.3703 45.2169 17.8349 46.0595 18.7834 46.2403C19.5015 46.3773 20.6304 46.5002 22.375 46.5002C24.1168 46.5002 25.347 46.3777 26.1718 46.2437C27.2507 46.0684 27.8777 45.1191 27.8777 44.1186V27.7324H34.9316C36.0256 27.7324 37.0562 27.009 37.2608 25.8665C37.6736 23.5618 37.4742 21.4753 37.2437 20.1563C37.0465 19.0284 36.0444 18.3217 34.9653 18.3217H27.8795C27.8917 16.7111 27.9661 15.4564 28.1447 14.4728C28.341 13.3921 28.6547 12.6875 29.1044 12.2048C29.5502 11.7263 30.1817 11.4104 31.1284 11.2121C32.0832 11.0121 33.3126 10.9408 34.9123 10.9193C36.0128 10.9045 37.0511 10.1718 37.2541 9.01765C37.6718 6.64193 37.4794 4.59202 37.2491 3.30238Z"
															clipRule="evenodd"
														/>
													</svg>
												</a>
											</li>
											<li>
												<a
													href="https://github.com/dimasandriano"
													target="_blank"
													className="transition-colors duration-300 hover:text-emerald-600 focus:text-emerald-700">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 48 48"
														height="16"
														width="16"
														className="w-4 h-4 shrink-0"
														role="graphics-symbol"
														aria-labelledby="title-tb02-light desc-tb02-light">
														<title id="title-tb02-light">Icon title</title>
														<desc id="desc-tb02-light">
															A more detailed description of the icon
														</desc>
														<path
															fill="currentColor"
															d="M34.7229 4.69819C36.9179 5.13151 38.8231 6.226 39.9574 7.46121L44.8741 7.22772C46.162 7.16656 46.9576 8.61264 46.216 9.66758L42.8041 14.5217C43.7777 35.6815 22.2547 49.0961 4.54954 41.2208C3.75067 40.8654 3.58181 40.0439 3.74682 39.4029C3.91015 38.7685 4.4337 38.1304 5.23631 38.0329C7.74782 37.7279 10.886 36.8951 13.5309 34.8102C11.3351 34.4801 8.87383 33.2203 6.77118 31.5522C4.25179 29.5535 2.11595 26.8651 1.53319 24.2321C1.41942 23.7181 1.60805 23.2504 1.94754 22.9478C2.27981 22.6517 2.75116 22.5146 3.22643 22.6022C4.4998 22.8369 6.44397 23.1705 7.93366 23.3225C7.82715 23.2095 7.71399 23.0872 7.59534 22.9561C6.83881 22.1198 5.85466 20.9171 4.947 19.4528C3.13974 16.5372 1.58717 12.5021 2.86967 8.24191C3.04524 7.65872 3.52191 7.3215 4.02883 7.2399C4.52724 7.15967 5.07712 7.31911 5.46709 7.72851C7.80814 10.1862 13.7896 15.4057 22.914 16.1638C22.5823 14.0277 22.368 9.45707 27.2507 6.17582C29.7236 4.51405 32.4029 4.2402 34.7229 4.69819Z"
														/>
													</svg>
												</a>
											</li>
											<li>
												<a
													href="https://github.com/dimasandriano"
													target="_blank"
													className="transition-colors duration-300 hover:text-emerald-600 focus:text-emerald-700">
													<GoMarkGithub />
												</a>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
