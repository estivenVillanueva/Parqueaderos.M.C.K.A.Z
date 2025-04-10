import React, { useState } from 'react';
import {
  TextField,
  Grid,
  CardContent,
  Typography,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  InputAdornment,
  Container,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import {
  VehiculoCardStyled,
  CardImageContainer,
  CardActionContainer,
  AddVehiculoCard,
  SearchContainer,
  ContentContainer
} from '../../styles/pages/Vehiculos.styles';

const VehiculoCard = ({ vehiculo, onVerInfo }) => (
  <VehiculoCardStyled>
    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 0 }}>
      <CardImageContainer>
        <DirectionsCarIcon sx={{ fontSize: 100, color: 'white' }} />
      </CardImageContainer>
      <CardActionContainer>
        <Button 
          fullWidth 
          variant="text"
          onClick={() => onVerInfo(vehiculo)}
        >
          Ver Info
        </Button>
      </CardActionContainer>
    </CardContent>
  </VehiculoCardStyled>
);

const FormularioVehiculo = ({ open, onClose, onGuardar, isEdit = false }) => {
  const [formData, setFormData] = useState({
    nombreCliente: '',
    placa: '',
    puesto: '',
    tipoVehiculo: '',
    color: '',
    tipoServicio: '',
    entradas: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGuardar(formData);
    onClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '16px',
          backgroundColor: '#f5f5f7',
        }
      }}
    >
      <DialogTitle align="center" pt={3}>
        <Typography variant="h6">
          {isEdit ? 'Información del vehículo' : 'Añadir nuevo vehículo'}
        </Typography>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nombre cliente"
                name="nombreCliente"
                value={formData.nombreCliente}
                onChange={handleChange}
                required
                variant="outlined"
                sx={{ backgroundColor: 'white', borderRadius: '8px' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Tipo de vehículo"
                name="tipoVehiculo"
                value={formData.tipoVehiculo}
                onChange={handleChange}
                required
                variant="outlined"
                sx={{ backgroundColor: 'white', borderRadius: '8px' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Puesto"
                name="puesto"
                value={formData.puesto}
                onChange={handleChange}
                required
                variant="outlined"
                sx={{ backgroundColor: 'white', borderRadius: '8px' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Placa"
                name="placa"
                value={formData.placa}
                onChange={handleChange}
                required
                variant="outlined"
                sx={{ backgroundColor: 'white', borderRadius: '8px' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Color"
                name="color"
                value={formData.color}
                onChange={handleChange}
                required
                variant="outlined"
                sx={{ backgroundColor: 'white', borderRadius: '8px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Tipo de servicio"
                name="tipoServicio"
                value={formData.tipoServicio}
                onChange={handleChange}
                required
                variant="outlined"
                sx={{ backgroundColor: 'white', borderRadius: '8px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Entradas y salidas registradas"
                name="entradas"
                value={formData.entradas}
                onChange={handleChange}
                multiline
                rows={3}
                variant="outlined"
                sx={{ backgroundColor: 'white', borderRadius: '8px' }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ p: 3, justifyContent: 'space-between' }}>
          <Button 
            onClick={onClose}
            color="primary"
          >
            Cancelar
          </Button>
          <Button 
            type="submit"
            variant="contained"
            color="primary"
          >
            {isEdit ? 'Guardar' : 'Añadir vehículo'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

const Vehiculos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const [selectedVehiculo, setSelectedVehiculo] = useState(null);

  const [vehiculos, setVehiculos] = useState([
    { id: 1, placa: 'ABC123', propietario: 'Juan Pérez' },
    { id: 2, placa: 'XYZ789', propietario: 'María García' },
  ]);

  const handleVerInfo = (vehiculo) => {
    setSelectedVehiculo(vehiculo);
    setOpenForm(true);
  };

  const handleGuardar = (datos) => {
    if (selectedVehiculo) {
      // Lógica para actualizar
    } else {
      setVehiculos([...vehiculos, { id: vehiculos.length + 1, ...datos }]);
    }
  };

  return (
    <Container maxWidth="xl">
      <ContentContainer>
        <SearchContainer>
          <TextField
            fullWidth
            placeholder="Buscar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </SearchContainer>

        <Grid container spacing={3}>
          {vehiculos.map((vehiculo) => (
            <Grid item xs={12} sm={6} md={3} key={vehiculo.id}>
              <VehiculoCard vehiculo={vehiculo} onVerInfo={handleVerInfo} />
            </Grid>
          ))}
          <Grid item xs={12} sm={6} md={3}>
            <AddVehiculoCard
              onClick={() => {
                setSelectedVehiculo(null);
                setOpenForm(true);
              }}
            >
              <AddIcon sx={{ fontSize: 40, color: 'text.secondary' }} />
            </AddVehiculoCard>
          </Grid>
        </Grid>

        <FormularioVehiculo
          open={openForm}
          onClose={() => setOpenForm(false)}
          onGuardar={handleGuardar}
          isEdit={!!selectedVehiculo}
        />
      </ContentContainer>
    </Container>
  );
};

export default Vehiculos; 