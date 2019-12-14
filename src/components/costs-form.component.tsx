import React from 'react';

type CostsFormProps = {
	title: string;
	setTitle: React.Dispatch<React.SetStateAction<string>>;
	cost: number;
	setCost: React.Dispatch<React.SetStateAction<number>>;
	handleAddCost(): void;
};

const CostsFormComponent: React.FC<CostsFormProps> = ({ title, setTitle, cost, setCost, handleAddCost }) => {
	const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
		handleAddCost();		
	};

	const disabledBtn = !title || cost === 0;
  return (
  	<form onSubmit={handleSubmit}>
	    <div>
	      <input id="title" 
	      			 type="text" 
	      			 className="validate"
	      			 placeholder="Type a title..." 
	      			 value={title} 
	      			 onChange={(event: React.ChangeEvent<HTMLInputElement>)  => setTitle(event.target.value)} />
	      <label htmlFor="email">Title</label>
	    </div>
	    <div>
	      <input id="cost" 
	      			 type="number" 
	      			 className="validate"
	      			 placeholder="Type a cost..." 
	      			 value={cost} 
	      			 onChange={(event: React.ChangeEvent<HTMLInputElement>)  => setCost(+event.target.value)}/>
	      <label htmlFor="cost">Cost</label>
	    </div>
	    <button type="submit" className="btn mt-1" disabled={disabledBtn}>Add</button>
    </form>
  );
};


export default CostsFormComponent;
