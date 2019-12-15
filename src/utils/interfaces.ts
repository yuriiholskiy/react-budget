export interface ICost {
	id: string;
	title: string;
	cost: number;
	color: string;
}

export interface IBudget {
	budget: number;
	setBudget: React.Dispatch<React.SetStateAction<number>>;
};

