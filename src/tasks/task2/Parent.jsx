import { useCallback, useState } from "react"
import { ListOfUsers } from "./ListOfUsers"
import { Button } from "@/components/ui/button";

export const Parent = () => {
    const [otherState, setOtherState] = useState(10);
    const [page, setPage] = useState(1);

    const nextHandler = useCallback(() => {
        setPage(prev => prev + 1);
    }, [page]);

    const prevHandler = useCallback(() =>{
        setPage(prev => prev - 1)
    }, [page]);

    console.log("Parent rendered");
    
    return (
        <div className="flex flex-col items-center space-y-6">
            <ListOfUsers page={page} nextHandler={nextHandler} prevHandler={prevHandler} />
            <Button 
                size="lg" 
                onClick={() => {
                    setOtherState(otherState+1);
                }}
                className='cursor-pointer'
                disabled={page == 499}
            >
                SetOtherState
            </Button>
        </div>
    )
}