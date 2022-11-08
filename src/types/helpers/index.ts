export interface DeviceProps {
  width: number,
  height: number,
  plataform: {
    type: string,
    animation: 'padding' | 'height'
  }
}