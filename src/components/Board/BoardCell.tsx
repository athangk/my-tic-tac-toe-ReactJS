import { FC, useEffect, useState } from 'react';

interface BoardCellProps {
	num: number;
	cellValue: string | null;
	handleClick: (num: number) => void;
}

export const BoardCell: FC<BoardCellProps> = (props) => {
	return (
		<div className="cell">
			<div
				className={`cell__inner no-select mark-${props.cellValue}`}
				onClick={() => props.handleClick(props.num)}
			>
				{props.cellValue}
			</div>
		</div>
	);
};
