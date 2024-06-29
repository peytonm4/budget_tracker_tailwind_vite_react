import { createContext } from "react";
import React, { useCallback, useState } from "react";
import categories from "./categories";

const CategoriesContext = createContext(categories);

export default CategoriesContext;
