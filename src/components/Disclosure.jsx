import { Disclosure, Transition } from "@headlessui/react";

export function ImageDisclosure({ onChange, onSubmit }) {
	return (
		<Disclosure>
			<Disclosure.Button className="py-2">
				<div
					id="open-trigger"
					className="py-1 px-3 my-2 uppercase font-semibold text-teal-500 border-t-2 border-b-2">
					Change Image
				</div>
			</Disclosure.Button>

			<Transition
				enter="transition duration-100 ease-out"
				enterFrom="transform scale-95 opacity-0"
				enterTo="transform scale-100 opacity-100"
				leave="transition duration-75 ease-out"
				leaveFrom="transform scale-100 opacity-100"
				leaveTo="transform scale-95 opacity-0">
				<Disclosure.Panel className="text-gray-500">
					<form className="flex items-center flex-col space-y-5">
						<input
							type="file"
							name="image"
							id="avatar"
							className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-teal-500 hover:file:bg-violet-100"
							accept="image/png, image/jpeg"
							onChange={(e) => onChange(e)}
						/>
						<button
							type="submit"
							id="submit-image"
							className="py-1 px-3 uppercase font-semibold text-teal-500 border-t-2 border-b-2"
							onClick={onSubmit}>
							Upload
						</button>
					</form>
				</Disclosure.Panel>
			</Transition>
		</Disclosure>
	);
}
