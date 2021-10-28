import { StableMasterTemplate } from '../../generated/templates'
import { StableMasterDeployed } from '../../generated/Core/Core'

export function handleStableMasterDeployed(event: StableMasterDeployed): void {
  // Start indexing and tracking new contracts
  StableMasterTemplate.create(event.params._stableMaster)
}
