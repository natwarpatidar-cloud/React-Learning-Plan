import { getUsersData } from "@/apis";
import { memo, Profiler, useEffect, useState } from "react";
import { ListItem }  from "./ListItem";
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";

export const ListOfUsers = memo(function ({ page, nextHandler, prevHandler }) {

    const [users, setUsers] = useState({});
    const [pending, setPending] = useState(false);
    
    async function getUsers() {
        try {
            setPending(true);
            const data = await getUsersData({page, limit: 10});
            if(data) {
                setUsers(data);
            }
            setPending(false);
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    useEffect(() => {
        getUsers();
    }, [page]);

    if(pending) {
        return (
            <div>Fetching data...</div>
        );
    }

    function onRenderCallback(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) {
        console.log(`Profiler [${id}]:
            \n${phase} - ${actualDuration} ms
            \n\nBaseDuration: ${baseDuration} ms
            \n\nStart Time: ${startTime}  ms
        `);
    }
    console.log("List rendered");

    return (
        <Profiler id="ExpensiveList" onRender={onRenderCallback}>
            <h1 className="font-semibold text-4xl text-center py-4">User list</h1>
            <div className="w-full flex flex-wrap gap-4 gap-y-8 px-12 py-6 justify-center">
                {
                    users?.data?.map((user) => {
                        return (
                            <div key={user?.email}>
                                <ListItem
                                    phone={user?.phone}
                                    image={user?.picture?.large}
                                    fullname={`${user?.name?.title} ${user?.name?.first} ${user?.name?.last}`} 
                                />
                            </div>
                        );
                    })
                }
            </div>
            <div>
                <ButtonGroup>
                    <Button 
                        variant="secondary" 
                        size="lg" 
                        className='cursor-pointer'
                        disabled={page == 1}
                        onClick={prevHandler}
                    >
                        Prev
                    </Button>
                    <ButtonGroupSeparator />
                    <Button 
                        variant="secondary" 
                        size="lg" 
                        onClick={nextHandler}
                        className='cursor-pointer'
                        disabled={page == 499}
                    >
                        Next
                    </Button>
                </ButtonGroup>
            </div>
        </Profiler>
    );
});