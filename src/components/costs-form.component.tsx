import React from 'react';

type CostsFormProps = {
	title: string;
	setTitle: React.Dispatch<React.SetStateAction<string>>;
	cost: number;
	setCost: React.Dispatch<React.SetStateAction<number>>;
	handleAddCost(): void;
	editCostId: string;
	handleStartEditing: any
};

const CostsFormComponent: React.FC<CostsFormProps> = (props) => {
	const { title, setTitle, cost, setCost, handleAddCost, editCostId, handleStartEditing } = props;
	const canEdit = !!editCostId;
	const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
		handleAddCost();		
	};
	const handleEditCost = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		handleStartEditing({id: editCostId, newTitle: title, newCost: cost});
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
	    {canEdit ? 
	    	<button className="btn mt-1" onClick={handleEditCost}>Edit</button> : 
	    	<button type="submit" className="btn mt-1" disabled={disabledBtn}>Add</button>}
    </form>
  );
};


export default CostsFormComponent;
