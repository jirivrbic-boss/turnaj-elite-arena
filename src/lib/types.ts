export interface Registration {
  id: string;
  fullName: string;
  email: string;
  faceitNickname: string;
  createdAt: Date | null;
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  faceitNickname: string;
}
