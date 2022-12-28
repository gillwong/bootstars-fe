import { Add, CalendarMonth, ListTwoTone } from "@mui/icons-material";
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import { useNavigate } from "react-router";

const SidebarMUI = ({ sidebarState }) => {
  const navigate = useNavigate();

  return (
    <Drawer 
      variant="persistent"
      anchor="left"
      open={sidebarState}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => navigate("/schedule")}
            >
              <ListItemIcon><CalendarMonth /></ListItemIcon>
              <ListItemText>My Schedule</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => navigate("/")}
            >
              <ListItemIcon><ListTwoTone /></ListItemIcon>
              <ListItemText>Course List</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => navigate("/add")}
            >
              <ListItemIcon><Add /></ListItemIcon>
              <ListItemText>Add Course</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
}
 
export default SidebarMUI;