import { CanActivateFn } from "@angular/router";

export function AdminGuard(): CanActivateFn {

    // let role = "admin";
    // let role = localStorage.getItem("role");
    // console.log(role);
    return () => {
        let role = localStorage.getItem("role");
        if (role == "Admin") {
            return true;
        }
        alert("sorry no access for role: " + role);
        return false;
    }
}

