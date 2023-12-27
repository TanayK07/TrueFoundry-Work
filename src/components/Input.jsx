import React from "react";
import Description from "./Description";

const Input = ({ data, namefield, register }) => {
	return (
		<div className="my-2 bg-blue-50 rounded-lg p-6 grid grid-cols-12 w-full transition-all duration-200">
			<h1 className="col-span-3 font-bold text-blue-800 flex items-center transition-all duration-200">
				{data.label} &nbsp;
				{data.description && <Description desc={data.description} />}
			</h1>

			<input
				type="text"
				className="col-span-9 py-2 px-4 text-sm rounded-lg bg-white border border-blue-200 focus:border-blue-500 transition-all duration-200"
				placeholder={data.placeholder}
				readOnly={data.validate && data.validate.immutable ? true : false}
				{...register(namefield)}
			/>
		</div>
	);
};

export default Input;
