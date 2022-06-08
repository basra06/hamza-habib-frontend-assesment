import React, { useState , FC, ChangeEvent} from 'react'
interface IAutocompleteProps {
    id: string;
    data: string[];
}
interface StateValues {
    filteredSuggestions?:Array<string>;
    userInput?:string
}

const AutoComplete = (props: IAutocompleteProps)=> {
    const [dataToFilter, setDataToFilter] = useState<StateValues>({
        filteredSuggestions: [],
        userInput: ""
    })

    const onChanges = (e: ChangeEvent<HTMLInputElement>) => {
        const { data } = props;
        const userInput = e.currentTarget.value;

        const filteredSuggestion = data.filter(
          suggestion =>
            suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
        setDataToFilter({
            ...dataToFilter,
            filteredSuggestions:filteredSuggestion,
            userInput:userInput
        })
        // this.setState({
        //   activeSuggestion: 0,
        //   filteredSuggestions,
        //   showSuggestions: true,
        //   userInput: e.currentTarget.value
        // });
      };
    console.log(dataToFilter)
    return (
        <form autoComplete="off" style={{ margin: '20px' }}>
            <div className='autocomplete' style={{ width: '300px' }}>
                <input id="myInput" onChange={onChanges} type="text" name="myCountry" placeholder="Country" />
            </div>
            
                <div>{dataToFilter.filteredSuggestions}</div>
                
            
            {/* <input  /> */}
        </form>
    )
}
export default AutoComplete