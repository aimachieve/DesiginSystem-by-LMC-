import React from 'react';
import Header from '../Header';
import { Link } from '../../Link';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <Header id="story-simple-inverted" isInverted isSimple>
    <Link href="/">
      <img
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA2NSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMzQ4MTIgMTEuOTA2OEw0LjI2MzY3IDYuNTk5MzlDNC4zNjA2OCA2LjA4NDg2IDQuNTM1IDUuNjE1NDMgNC43ODc1IDUuMTkxOTZMNC43ODc4OCA1LjE5MTMyTDQuNzg4MjggNS4xOTA2OEM1LjIxMzM3IDQuNTAyMzUgNS44MDY4MiAzLjk2MTE1IDYuNTY2MDEgMy41NjcxN0M3LjMyNTQ3IDMuMTU4NzMgOC4xOTk0NCAyLjkzMzk1IDkuMTg1NjcgMi44OTA0N0w5LjE4NzgxIDIuODkwMzhIOS4xODk5NEMxMC40NzEyIDIuODkwMzggMTEuNTE1NiAzLjA0MTIyIDEyLjMxODYgMy4zNDc1MUMxMy4xMjY2IDMuNjUwMjggMTMuODQ5NSA0LjAxMTIxIDE0LjQ4NjUgNC40MzA3MkwxNC41NTggNC40Nzc3OUwxMy4yOTMzIDcuMDI3ODlMMTMuMjA0OSA2Ljk3OTQ5QzEyLjYwNzkgNi42NTI4NyAxMS45OTcgNi4zODMxOSAxMS4zNzIxIDYuMTcwMzRMMTEuMzcxNCA2LjE3MDEyQzEwLjc2MzcgNS45NTgzIDEwLjE5NDMgNS44NTM0NiA5LjY2MjcgNS44NTM0NkM5LjAwMTE5IDUuODUzNDYgOC40OTMxMyA1Ljk4NzIxIDguMTI4MjIgNi4yNDM3N0M3Ljc3MTM2IDYuNDk0NjggNy41ODkxMSA2Ljg3MDU3IDcuNTg5MTEgNy4zODg0OEM3LjU4OTExIDcuNzMyMTYgNy43MjAxNCA4LjA0NDc4IDcuOTkwNTcgOC4zMjkxOEM4LjI4MjY3IDguNjA2NzMgOC42NTMxNCA4Ljg1ODU3IDkuMTAzNzcgOS4wODM3NEM5LjU3MzUzIDkuMzExMjggMTAuMDU3NiA5LjUxNzUzIDEwLjU1NiA5LjcwMjQ4TDEwLjU1NjIgOS43MDI1OEMxMS4wMTg2IDkuODc1ODEgMTEuNDczNSAxMC4wODUgMTEuOTIxIDEwLjMzMDFDMTIuMzg3NyAxMC41NjM0IDEyLjgwMzcgMTAuODYyNCAxMy4xNjg3IDExLjIyN0MxMy41Mzc2IDExLjU4MSAxMy44MzA5IDEyLjAyOTIgMTQuMDUgMTIuNTY5QzE0LjI3MTEgMTMuMDk5NCAxNC4zNzk2IDEzLjc0OTcgMTQuMzc5NiAxNC41MTY2QzE0LjM3OTYgMTUuMzM1OCAxNC4xNjcxIDE2LjA5NzQgMTMuNzQyNSAxNi43OTk1QzEzLjMxNjkgMTcuNTAzMyAxMi42OTQzIDE4LjA3MjkgMTEuODc4OCAxOC41MDk0TDExLjg3NzYgMTguNTFDMTEuNzAyNCAxOC42MDA3IDExLjUxODcgMTguNjgxNSAxMS4zMjY2IDE4Ljc1MjZMOS43NDY3NyAxNi4wMzQyQzEwLjA4NzggMTUuOTIyOSAxMC4zNjQ4IDE1Ljc1MjIgMTAuNTgwOCAxNS41MjM3TDEwLjU4MTggMTUuNTIyN0wxMC41ODI3IDE1LjUyMTdDMTAuODE4MSAxNS4yODY2IDEwLjk0MTIgMTQuOTU1OSAxMC45NDEyIDE0LjUxNjZDMTAuOTQxMiAxNC4yMjU4IDEwLjg0MjcgMTMuOTYxMiAxMC42NDEzIDEzLjcxOTdMMTAuNjQwMyAxMy43MTg0TDEwLjYzOTIgMTMuNzE3MUMxMC40NDc3IDEzLjQ3MTEgMTAuMTc4NCAxMy4yNDI0IDkuODI3NzggMTMuMDMyMkw5LjgyNzAzIDEzLjAzMTdMOS44MjYyOCAxMy4wMzEzQzkuNDg4MzEgMTIuODIwMiA5LjExNDQzIDEyLjYzNjkgOC43MDQzNCAxMi40ODE1TDguNzA0MSAxMi40ODE0QzguMjYzNTIgMTIuMzEzMSA3LjgxMTUyIDEyLjEyMTUgNy4zNDgxMiAxMS45MDY4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC4wOTk1IDEzLjQ4ODRMMjQuMTAwMyAxMy40ODhDMjQuODI4IDEzLjE1MzYgMjUuNDA2OCAxMi43MTU1IDI1LjgzMzIgMTIuMTcyMkMyNi4yNzA2IDExLjYzMzEgMjYuNTg0NSAxMS4wMzUxIDI2Ljc3NDQgMTAuMzc4OEMyNi45Nzc0IDkuNzEyMTUgMjcuMDc5MiA5LjA1MTYzIDI3LjA3OTIgOC4zOTc1OEMyNy4wNzkyIDcuMjk1NyAyNi44Mzk3IDYuMzQwNDMgMjYuMzU2NSA1LjUzNTY4QzI1Ljg3MzMgNC43MTY1MyAyNS4xNzA3IDQuMDg4NSAyNC4yNTI1IDMuNjUxNDlDMjMuMzMzNCAzLjE5OTc4IDIyLjIxNSAyLjk3NjI2IDIwLjkwMSAyLjk3NjI2SDE2LjAxMjJWMTguOTcxN0gxOS4zMjE3VjEzLjk2OTJIMjEuNDU5N0MyMi41MDA1IDEzLjk2OTIgMjMuMzgxNiAxMy44MTA0IDI0LjA5OTUgMTMuNDg4NFpNMjMuMjcyMyA5LjkyOTc0TDIzLjI3MTcgOS45MzA2QzIzLjExMDEgMTAuMTU5MiAyMi44NzkzIDEwLjM1NzMgMjIuNTc1MyAxMC41MjMzQzIyLjI3NzYgMTAuNjcxNiAyMS45MDAxIDEwLjc0ODUgMjEuNDM4MiAxMC43NDg1SDE5LjMyMTdWNi4xNzU1MUgyMS40NTk3QzIxLjk5NDYgNi4xNzU1MSAyMi40MDUxIDYuMjY3MTggMjIuNjk5OCA2LjQ0MTE3TDIyLjcwMDYgNi40NDE2NUwyMi43MDE0IDYuNDQyMUMyMy4wMTkgNi42MjE0MiAyMy4yNDg2IDYuODM5MTUgMjMuMzk1OSA3LjA5MzQxQzIzLjU0ODQgNy4zNTY1MSAyMy42NDQgNy42MTcyNSAyMy42ODQ5IDcuODc1OTFMMjMuNjg1NCA3Ljg3ODg3TDIzLjY4NiA3Ljg4MThDMjMuNzQyNyA4LjEzNjUxIDIzLjc2OTcgOC4zMzYyMSAyMy43Njk3IDguNDgzNDZDMjMuNzY5NyA4LjY3MDc2IDIzLjcyOTQgOC44OTY2NyAyMy42NDUzIDkuMTYyODVMMjMuNjQ0NSA5LjE2NTA5TDIzLjY0MzkgOS4xNjczNkMyMy41NzU3IDkuNDI2NDEgMjMuNDUyNCA5LjY4MDUxIDIzLjI3MjMgOS45Mjk3NFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zMS45NTEyIDIuOTc2MjZIMjguNjQxOFYxOC45NzE3SDMxLjk1MTJWMi45NzYyNloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzguMDIwNiAxMy45NDc3SDM5Ljk0NjhMNDMuMjg3MSAxOC45NzE3SDQ3LjE0NzZMNDMuNDI2NSAxMy4xNzAzQzQzLjg5OTQgMTIuODg1OSA0NC4yOTY2IDEyLjU0NjcgNDQuNjE3MSAxMi4xNTE5QzQ1LjA2OTEgMTEuNjEyNyA0NS4zOTA1IDExLjAxNDUgNDUuNTgwNiAxMC4zNTc3QzQ1Ljc4MzcgOS43MDUwMyA0NS44ODU1IDkuMDUxNTYgNDUuODg1NSA4LjM5NzU4QzQ1Ljg4NTUgNy41NzA5NiA0NS43NDc2IDYuODI3OTIgNDUuNDY5NyA2LjE3MDEyQzQ1LjE5MiA1LjQ5ODY5IDQ0Ljc4MjQgNC45Mjg0OSA0NC4yNDE0IDQuNDYwNzJDNDMuNzE0MSAzLjk3ODAzIDQzLjA1NyAzLjYxNDE2IDQyLjI3MjkgMy4zNjc0M0M0MS40ODc4IDMuMTA2MDYgNDAuNTk2MyAyLjk3NjI2IDM5LjU5OTkgMi45NzYyNkgzNC43MTExVjE4Ljk3MTdIMzguMDIwNlYxMy45NDc3Wk00MS45NzI4IDkuOTQ5MDlMNDEuOTcxNiA5Ljk1MDU2TDQxLjk3MDYgOS45NTIwN0M0MS44MDk0IDEwLjE4MDIgNDEuNTc5MiAxMC4zNzA5IDQxLjI3NTcgMTAuNTIyNUM0MC45Nzc4IDEwLjY3MTMgNDAuNTk5OCAxMC43NDg1IDQwLjEzNzEgMTAuNzQ4NUgzOC4wMjA2VjYuMTc1NTFINDAuMTU4NkM0MC42OTM1IDYuMTc1NTEgNDEuMTA0IDYuMjY3MTggNDEuMzk4NyA2LjQ0MTE3TDQxLjM5OTUgNi40NDE2NUw0MS40MDAzIDYuNDQyMUM0MS43MTc5IDYuNjIxNDIgNDEuOTQ3NSA2LjgzOTE1IDQyLjA5NDggNy4wOTM0MUM0Mi4yNDczIDcuMzU2NTEgNDIuMzQyOSA3LjYxNzI1IDQyLjM4MzggNy44NzU5MUw0Mi4zODQzIDcuODc4ODdMNDIuMzg0OSA3Ljg4MThDNDIuNDQxNCA4LjEzNTgxIDQyLjQ2ODYgOC4zNDI5MiA0Mi40Njg2IDguNTA0OTNDNDIuNDY4NiA4LjcyMTk5IDQyLjQyNzggOC45NjI1MiA0Mi4zNDQxIDkuMjI3MjZMNDIuMzQzNiA5LjIyODg3TDQyLjM0MzIgOS4yMzA1QzQyLjI3NTMgOS40NzQ2NCA0Mi4xNTI2IDkuNzE0MTYgNDEuOTcyOCA5Ljk0OTA5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTUxLjYyMzYgMi45NzYyNkg0OC4zMTQxVjE4Ljk3MTdINTEuNjIzNlYyLjk3NjI2WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTY0LjE2MTEgMi45NzYyNkg1My4zMDlWNi4xNzU1MUg1Ny4wMDUxVjE4Ljk3MTdMNjAuMzE0NiAxOC45NTg2VjYuMTc1NTFINjQuMTYxMVYyLjk3NjI2WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wLjUyNDc3NCAwLjI3NDIyN0MwLjU3NDczNCAwLjI0NTQwOCAwLjYzODYxNyAwLjI2MjUxMSAwLjY2NzQ2MiAwLjMxMjQyN0wxNC4xMTQ2IDIzLjU4MzJDMTQuMTQzNCAyMy42MzMxIDE0LjEyNjMgMjMuNjk2OSAxNC4wNzY0IDIzLjcyNThDMTQuMDI2NCAyMy43NTQ2IDEzLjk2MjUgMjMuNzM3NSAxMy45MzM3IDIzLjY4NzZMMC40ODY1NDEgMC40MTY3OUMwLjQ1NzY5NyAwLjM2Njg3NCAwLjQ3NDgxNSAwLjMwMzA0NiAwLjUyNDc3NCAwLjI3NDIyN1oiIGZpbGw9IiM3N0E2QzAiLz4KPHBhdGggZD0iTTIuNzUzMDQgMTguNDI5OUgyLjE3NzQ5VjE5LjE2OTNIMS40Mzc1TDEuNDM3NSAxOS43NDQzSDIuMTc3NDlWMjAuNDgzN0gyLjc1MzA0VjE5Ljc0NDNIMy40OTMwNFYxOS4xNjkzTDIuNzUzMDQgMTkuMTY5M1YxOC40Mjk5WiIgZmlsbD0iIzc3QTZDMCIvPgo8L3N2Zz4K"
        width="65"
        height="24"
        alt="Spirit"
      />
    </Link>
  </Header>
);

export default Story;
