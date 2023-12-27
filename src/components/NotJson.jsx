import React, { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const NotJson = () => {
	useEffect(() => {
		toast.error("The schema is not proper json!", {
			position: toast.POSITION.TOP_CENTER,
			autoClose: 3000,
		});
	}, []);

	return (
		<div className="col-span-6 flex flex-col items-center justify-center h-full">
			<h1 className="text-4xl mt-6 font-bold font-mono">Invalid json format</h1>
		</div>
	);
};

export default NotJson;
