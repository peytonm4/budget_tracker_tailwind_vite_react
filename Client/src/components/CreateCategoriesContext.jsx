import { createContext, useCallback, useContext, useEffect } from "react";
import { useState } from "react";
import useCategories from "../hooks/useCategories";

const CategoriesContext = createContext({
    categories: [],
    fetchCategories: async () => {}
});

export const CategoriesProvider = ({ children }) => {
    const { getAllCategories } = useCategories();
    const [categories, setCategories ] = useState([]);

    const fetchCategories = useCallback(async () => {
        let allCategories = await getAllCategories();
        console.log("Categories", allCategories);
        setCategories(allCategories);
    }, []);
    
    useEffect(() => {
        fetchCategories();
    }, [fetchCategories])


    return (<CategoriesContext.Provider value={{ categories, fetchCategories }}>
        {children}
    </CategoriesContext.Provider>)
}

export const useCategoryContext = () => useContext(CategoriesContext);

// import { useAuth } from "@/components/contexts/AuthContext";
// import useCompanies from "@/hooks/data/useCompanies";
// import useOffices from "@/hooks/data/useOffices";
// import useUsers from "@/hooks/data/useUsers";
// import { SearchFilter } from "@simplerealtybits/srb-types";
// import { SelectOptionDto } from "@t/CKCommon/Dtos/SelectOptionDto";
// import { Company } from "@t/Company"
// import { Office } from "@t/Office";
// import { UserGet } from "@t/UserGet";
// import { createContext, useCallback, useContext, useEffect, useState } from "react";
// import useCategories from "../hooks/useCategories";

// type CompanyContextType = {
//     Company: Company | undefined;
//     Users: UserGet[];
//     UserOptions: SelectOptionDto[];
//     Offices: Office[];
// }

// const CompanyContext = createContext<CompanyContextType>({
//     Company: undefined,
//     Users: [],
//     UserOptions: [],
//     Offices: [],
// });


// export const CompanyProvider = ({ children }: { children: React.ReactNode }) => {
//     const { authState: { user } } = useAuth();

//     const { getById } = useCompanies();
//     const { getUsersByFilter, getUserOptions } = useUsers();
//     const { getOfficesByFilter } = useOffices();

//     const [Company, setCompany] = useState<Company | undefined>(undefined);
//     const [Users, setUsers] = useState<UserGet[]>([]);
//     const [UserOptions, setUserOptions] = useState<SelectOptionDto[]>([]);
//     const [Offices, setOffices] = useState<Office[]>([]);

//     const fetchData = useCallback(async () => {
//         if (user.companyId) {
//             const searchFilter: SearchFilter = {
//                 search: [
//                     { key: "companyId", value: user.companyId }
//                 ],
//                 getAll: true
//             }

//             const companyRes = await getById(user.companyId);
//             if (companyRes.success) setCompany(companyRes.data);
//             else return;

//             const usersRes = await getUsersByFilter(searchFilter);
//             if (usersRes.success) setUsers(usersRes.data);

//             const userOptionRes = await getUserOptions();
//             if (userOptionRes.success) setUserOptions(userOptionRes.data);

//             const officesRes = await getOfficesByFilter(searchFilter);
//             if (officesRes.success) setOffices(officesRes.data);
//         }
//     }, [user.companyId]);

//     useEffect(() => {
//         fetchData();

//         return () => {
//             setCompany(undefined);
//             setUsers([]);
//             setOffices([]);
//         }
//     }, [fetchData]);

//     return (
//         <CompanyContext.Provider value={{ Company, Users, UserOptions, Offices }}>
//             {children}
//         </CompanyContext.Provider>
//     )
// }

// export const useCompanyContext = () => useContext(CompanyContext);
