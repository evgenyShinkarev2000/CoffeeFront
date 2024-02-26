import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Mapper } from "src/apollo";

type MapperProviderProps = PropsWithChildren & {

};

const MapperContext = createContext<typeof Mapper>({} as typeof Mapper);

export function MapperProvider(props: MapperProviderProps) {
    const [mapper] = useState(Mapper);

    return <MapperContext.Provider value={mapper}>{props.children}</MapperContext.Provider>
}

export function useMapper(){
    return useContext(MapperContext);
}