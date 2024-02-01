import React from "react";

function Detail({ icon, name, value }) {
	return (
		<div className="flex items-center justify-center p-4 gap-x-2 w-[136px] h-24 rounded-lg font-sf">
			<div className="w-6 h-6">{icon}</div>
			<div className="flex-grow shrink-0 basis-0">
				<p className="text-sm leading-4 text-[#A7A7A7]">{name}</p>
				<p className="text-sm leading-4 font-medium text-[#4E4E4E]">
					{value}
				</p>
			</div>
		</div>
	);
}

export default Detail;
