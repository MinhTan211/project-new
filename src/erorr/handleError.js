import { Alert, AlertTitle } from "@mui/material";

export default function hanldError(value) {
    return (
        <Alert className='mt-4' severity="success">
            <AlertTitle>DateTimePicker</AlertTitle>
            Ngày bạn đã chọn: <strong>{value ? value.toString() : "undefined"}</strong>
            <br />
            Chuyển thành dạng milliseconds: <strong>{new Date(value).getTime() ? new Date(value).getTime() : 0}</strong>
        </Alert>
    )

}

export const StringError = {
    invalidDate: "Xin vui lòng nhập đúng định dạng",
    emptyDate: "Xin vui lòng nhập ngày..."
}