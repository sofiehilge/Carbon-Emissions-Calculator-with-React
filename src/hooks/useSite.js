import { useQuery } from "@tanstack/react-query";
import {retrieveSite} from "../api"

const useSite = (url) =>
useQuery({
    queryKey: ["site", url],
    queryFn: () => retrieveSite(url),
    enabled: false,
});

export default useSite;