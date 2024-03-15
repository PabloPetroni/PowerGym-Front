import React from 'react';
import {
	MaterialReactTable,
	useMaterialReactTable,
} from 'material-react-table';
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { MRT_Localization_ES } from 'material-react-table/locales/es';

export const Tabla = ({
	columns,
	data,
	actions,

}) => {

	// Funcion para cargar tabla de movimientos
	const table = useMaterialReactTable({
		columns,
		data: data || [],
		enableColumnFilterModes: true,
		enableColumnOrdering: true,
		enableGlobalFilterModes: true,
		enableColumnPinning: true,
		enableRowActions: true,
		enableGrouping: true,
		paginationDisplayMode: 'pages',
		positionToolbarAlertBanner: 'bottom',
		localization: MRT_Localization_ES,
		muiSearchTextFieldProps: {
			size: 'medium',
			variant: 'outlined',
		},
		muiPaginationProps: {
			color: 'primary',
			rowsPerPageOptions: [5, 10, 20, 30],
			shape: 'rounded',
			variant: 'outlined',
		},
		renderRowActions: ({ row }) => (
			<Box sx={{}}>
				{actions.map((action, index) => {
					if (
						row.original.estado !== 'Abonado' &&
						row.original.disponibilidad !== 'Cupo completo'
					) {
						return (
							<button
								key={index}
								className='btnreservar'
								onClick={() => action.onClick(row)}>
								{action.text}
							</button>
						);
					} else {
						return null;
					}
				})}
			</Box>
		),
	});

	const lightTheme = createTheme({
		palette: {
			mode: 'dark',
		},
	});

	return (
		<div>
			<ThemeProvider theme={lightTheme}>
				<CssBaseline />
				<MaterialReactTable table={table} />
			</ThemeProvider>

         <hr
					className='mx-5 bg-warning'
					style={{ border: '2px solid #ffcc00' }}
				/>

		</div>
	);
};
