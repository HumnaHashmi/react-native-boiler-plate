import { useEffect } from 'react'
import NetInfo from 'react-native-community/netInfo'
import { Toast } from '../config/utils/toast'
const useNetinfo=()=>{
    useEffect(()=>{
        const unsubscribe=NetInfo.addEventListner(state=>{
            if(!state.isConnected){
                Toast.error({
                  text1:"No internet connected"
                });
            }
            else{
                Toast.success({
                    text1:"success"
                })
            }
        })
        return ()=>unsubscribe();
    },[])
}
export default useNetinfo;