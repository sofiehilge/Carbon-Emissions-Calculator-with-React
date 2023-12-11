import { useQuery } from "@tanstack/react-query";
import {retrieveSite} from "../api"

const useSite = (url) =>
useQuery({
    queryKey: ["site", url],
    queryFn: () => retrieveSite(url),
    enabled: false,
    onSuccess: () => {
        setIsLoading(false);
    },
    onError: () => {
        setIsLoading(false);
    }
});

export default useSite;